const User = require("../../models/userSchema");
const redisClient = require("../../config/redis");

async function getEmployeeDataFromCache(key) {
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
function setEmployeeDataToCache(key, data) {
    redisClient.set(key, JSON.stringify(data), 'EX', 3600);
}

exports.getemployee = async (req, res) => {
    try {
        const id = req.params.id.slice(1);
        const cacheKey = `employee:${id}`;
        let employees = getEmployeeDataFromCache(cacheKey);

        if (!employees) {
            try {
                const user = await User.findById({ _id: id }).populate('projects employees');
                const employees = user.employees;
                console.log(employees);
                setEmployeeDataToCache(cacheKey, employees);
                res.status(200).json({ data: { employees }, message: "success" })
            } catch (error) {
                console.error(error);
                res.status(404).json({ message: "fail", error: error });
            }
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }
};
