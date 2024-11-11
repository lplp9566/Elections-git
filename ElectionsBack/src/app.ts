import  express  from "express";
import dotenv from "dotenv"
import connectDB from "./config/db";
import router from "./routers/authRouter"
import cors from "cors"
import { json } from "stream/consumers";
const app = express();

dotenv.config()

const PORT = process.env.PORT || 3000;

app.use(express.json());
connectDB();
app.use("/", router);
app.use(cors());
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  
  export default app;
