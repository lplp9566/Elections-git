  export interface User {
    userName: string;
    password: string;
    isAdmin: boolean;
    hasVoted: boolean;
    votedFor: string | null;
 }
 export interface CandidateInterface {
    _id?:string
    name: string;
    image: string;
    votes: number;
  }

export type Status = "idle" | "pending" | "fulfilled" | "rejected"