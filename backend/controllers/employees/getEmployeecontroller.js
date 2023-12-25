const User = require("../../models/userSchema");

exports.getemployee = async (req, res) => {
    try {
        const id = req.params.id.slice(1);

            try {
                const user = await User.findById({ _id: id }).populate('projects employees');
                const employees = user.employees;
                res.status(200).json({ data: { employees }, message: "success" })
            } catch (error) {
                console.error(error);
                res.status(404).json({ message: "fail", error: error });
            }
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      }
};
