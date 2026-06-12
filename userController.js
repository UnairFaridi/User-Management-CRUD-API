import userModel from "../models/userModel.js";

class userController {
    async createUser(req, res) {
        try {
            console.log("user data:", req.body);
            const { name, email, password, role, status } = req.body;
            const user = await userModel.create({
                name, email, password,
                role: "Student",
                status: "Active"
            });
            return res.status(200).json({
                success: true,
                message: "user added successfully"
            })
        } catch (error) {
            console.log(`Error: ${error.message}`);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userModel.find();
            return res.json({
                success: true,
                message: "users found",
                data: users
            });
        } catch (error) {
            console.log(`Error: ${error.message}`);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async deleteUser(req,res){
        try {
            const delUser = await userModel.deleteOne({
                _id: req.params.id
            });
            return res.json({
                success: true,
                message: "user deleted successfully",
                data: delUser
            })
        } catch (error) {
            console.log(`Error: ${error.message}`);
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async updateUser(req, res) {
    try {

        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.json({
            success: true,
            message: "User updated successfully",
            data: updatedUser
        });

    } catch (error) {
        console.log(`Error: ${error.message}`);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
}

export default new userController();