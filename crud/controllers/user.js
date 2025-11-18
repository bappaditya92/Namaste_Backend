import { use } from "react";
import { User } from "../models/user";
export const register = async ()=>{
    try {
        const {fullName, email, password} = request.body;
        if(!fullName || !email || !password){
            return res.status(403).json({
                success: false,
                message: "All field are required."
            })
        }
        //find the user already exist or not
        const user = await User.findOne(email);
        if(user){
            return res.status(403).json({
                success: false,
                message: "This email id is already exist"
            })
        }
        await User.create({
            fullName,email,password
        });

        res.status(201).json({
            success: true,
            message: "User created sucessfully"
        })
    } catch (error) {
        
    }
}