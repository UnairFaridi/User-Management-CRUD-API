import mongoose  from "mongoose";

const userSchema  = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"name is required"]
    }, 
    email:{
        type: String,
        required: [true,"email is required"],
        unique: [true, "this email already exists"]
    },
    password:{
        type: String,
        required: [true, "password is required"]
    },
    role:{
        type: String,
        required: [true, "role type is required"],
        enum: ["Admin","Teacher","Student"],
        default: "Student"
    },
    status:{
        type: String,
        enum: ["Active","Inactive"],
        default: "Active"
    },

},{timestamps:true});

const userModel = mongoose.model("user",userSchema);

export default userModel;

