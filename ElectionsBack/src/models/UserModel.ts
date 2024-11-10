import mongoose, { Schema, Document, Types } from "mongoose";

export interface IUser extends Document {
  id: Types.ObjectId;
  userName: string;
  password: string;
  isAdmin: boolean;
  hasVoted: boolean;
  votedFor: Types.ObjectId | null;
}
const UserSchema = new Schema<IUser>({
    userName:{
        type:String,
        required:[true,"userName is required"],
        unique:true,
        minlength:[3,"username most more "],
        maxlength:[30,"ist biggggggg"]
    },
    password:{
        type:String,
        required:true,
        minlength :[9,"password most be 9 "],
        maxlength:[9,"its bagger then 9"],
      },
      isAdmin:{
        type:Boolean,
        required:true

      },
      hasVoted:{
        type:Boolean,
        required:true
      },
      votedFor:{
        type:Schema.Types.ObjectId,
        ref :"Candidate",
        default:null
      }
});
export default mongoose.model<IUser>("Users",UserSchema)
