// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import connectDb from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";  
import productRouter from "./routes/productRoute.js";
import connectCloudinary from './config/cloudinary.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// connect DB
connectDb();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors({
  origin: [
    "https://your-frontend.onrender.com",
    "https://your-admin.onrender.com",
     "http://localhost:5173",
     "http://localhost:5174",
     "https://buy-more-ecommerce-1.onrender.com",
     "https://buy-more-ecommerce-admin.onrender.com"
  ],
  credentials: true
}));

// api end points
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use('/api/cart', cartRouter)
app.use('/api/orders', orderRouter)

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
