import  express  from "express";
import dotenv from "dotenv"
import connectDB from "./config/db";
const app = express();

dotenv.config()

const PORT = process.env.PORT || 3000;

// app.use(express.json());
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
  export default app;
