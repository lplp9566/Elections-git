import { Request,Response } from "express";
import UserModel, { IUser } from "../models/UserModel";
import CandidateModel from "../models/CandidateModel";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { v3 } from "uuid";
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
        res.status(200).json({user:findUser, token:token})
    }
    catch{
        res.status(400).json("The username or password is incorrect")
    }
}
export const checkToken = async (req: Request, res: Response) => {
    const { token, userName } = req.body;
    try {
        const decoded = jwt.verify(token, SECRET_KEY) as { userId: string };
        
        const findUser = await UserModel.findOne({ userName: userName });
        
        if (findUser && findUser._id!.toString() === decoded.userId) {
            res.status(200).json({ message: "Token and user match" });
        } else {
            res.status(401).json({ message: "Token does not match the user" });
        }
    } catch (error) {
        console.error("Invalid token:", error);
        res.status(400).json({ message: "Invalid token" });
    }
};


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


export const getUsers = async (req: Request, res: Response) => {
    try {
      const candidates = await UserModel.find();
      res.status(200).json(candidates);
    } catch (err) {
      res.status(400).json({
        massage: "something went wrong in -getCandidates-@userController",
      });
    }
  };
