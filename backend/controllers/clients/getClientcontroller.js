const User = require("../../models/userSchema");
const redisClient = require("../../config/redis");

async function getClientDataFromCache(key) {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, data) => {
            if (err) {
                reject(err);
            } else if (!data) {
                resolve(null);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}
function setClientDataToCache(key, data) {
    redisClient.set(key, JSON.stringify(data), 'EX', 3600);
}

exports.getclient = async (req, res) => {
    try {
        const id = req.params.id.slice(1);
        const cacheKey = `client:${id}`;
        let clients = await getClientDataFromCache(cacheKey);
        if (!clients) {
            try {
                const user = await User.findById({ _id: id }).populate("projects employees clients");
                const clients = user.clients;
                console.log(clients);
                setClientDataToCache(cacheKey, clients);
                res.status(200).json({ data: { clients }, message: "success" })
        
            } catch (error) {
                console.error(error);
                res.status(404).json({ message: "fail", error: error });
            }
        }else{
            console.log('i am in redis');
            res.status(200).json({ data: { clients }, message: "success" })
        }
        res.status(200).json(clients);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }
    
};
