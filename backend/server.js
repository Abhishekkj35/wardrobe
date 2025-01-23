import express from "express";
import cors from "cors";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/db.js";

//app config
const app=express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

// database connection 
connectDB();
connectCloudinary();

//api endpoints
app.use("/api/product", productRouter);
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("Express app is running")
})

app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port "+port)
    }
    else{
        console.log("error: "+error) 
    }
})

