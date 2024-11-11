import { Request,Response } from "express";
import UserModel, { IUser } from "../models/UserModel";
import CandidateModel from "../models/CandidateModel";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
const SECRET_KEY:string = process.env.SECRET_KEY || " my_secret"
 export const createUser =async (req:Request,res:Response):Promise<void>=>{
    const user =req.body
    const findUserName = await UserModel.findOne({userName: user.userName});
    if(findUserName){
        res.status(400).json({message:"usename is alerdy use"}) 
            return
    }
    try{
    const newUser =  new UserModel ({
        userName :user.userName,
        password:user.password,
        isAdmin :false,
        hasVoted:false ,
        votedFor:null
    } )
    const addUser = await UserModel.create(newUser)
    res.status(201).json({id: addUser._id})
    }
    catch(error){
        console.error('Error in userName:', error);
        res.status(500).json({ error: 'Internal server error' })
    }
}
export const userlogin = async (req:Request,res:Response)=>{
    const {userName,password} =req.body;
  
    try{
        const findUser = await UserModel.findOne({userName: userName,password:password});
        if(!findUser){
            throw new Error()
        }
        const userId =findUser?._id
        const token = jwt.sign({userId},SECRET_KEY,{expiresIn :"1h"})
        res.status(200).json({tokin:token})
    }
    catch{
        res.status(400).json("The username or password is incorrect")
    }
    
}
export const getAllCandidate = async (req:Request,res:Response)=>{
    try{
        const allCandidate = await CandidateModel.find();
        if(!allCandidate){
            throw new Error()
        }
        res.status(200).json(allCandidate)
    }
    catch(error){
        res.status(400).json("no candidate")
    }
 
} 

