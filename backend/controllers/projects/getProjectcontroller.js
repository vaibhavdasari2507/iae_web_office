const User = require("../../models/userSchema");

exports.getproject = async (req, res) => {
    try {
        const id = req.params.id.slice(1);
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

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }

};
