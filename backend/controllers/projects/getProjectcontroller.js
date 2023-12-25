const User = require("../../models/userSchema");
// const redisClient = require("../../config/redis");

// async function getProjectDataFromCache(key) {
//     return new Promise((resolve, reject) => {
//         redisClient.get(key, (err, data) => {
//             if (err) {
//                 reject(err);
//             } else if (!data) {
//                 resolve(null);
//             } else {
//                 resolve(JSON.parse(data));
//             }
//         });
//     });
// }
// function setProjectDataToCache(key, data) {
//     redisClient.set(key, JSON.stringify(data), 'EX', 3600);
// }

exports.getproject = async (req, res) => {
    try {
        const id = req.params.id.slice(1);
        // const cacheKey = `project:${id}`;
        // let projects = getProjectDataFromCache(cacheKey);
        if (!projects) {
            try {
                const user = await User.findById({ _id: id }).populate("projects employees clients");
                const projects = user.projects;
                console.log(projects);
                // setProjectDataToCache(cacheKey, projects);
                res.status(200).json({ data: { projects }, message: "success" })
        
            } catch (error) {
                console.error(error);
                res.status(404).json({ message: "fail", error: error });
            }
        }
        res.status(200).json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }

};
