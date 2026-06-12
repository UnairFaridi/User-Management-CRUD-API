import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.post("/createUser",userController.createUser);
router.get("/users",userController.getAllUsers);
router.delete("/deleteUser/:id",userController.deleteUser);
router.put("/updateUser/:id",userController.updateUser);

export default router;