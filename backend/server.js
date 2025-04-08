// import express from 'express'
// import cors from 'cors'
// import { connectDB } from './config/db.js'
// import foodRouter from './routes/foodRoute.js'
// import userRouter from './routes/userRoute.js';
// import 'dotenv/config';
// import cartRouter from './routes/cartRoute.js';
// import orderRouter from './routes/orderRoute.js';

// //app config
// const app = express()
// const port = process.env.PORT || 4000;

// // middleware
// app.use(express.json())
// app.use(cors())

// //db connection
// connectDB();

// // api endpoints
// app.use("/api/food",foodRouter)
// app.use("/images",express.static('uploads'))
// app.use('/api/user', userRouter)
// app.use('/api/cart', cartRouter)
// app.use('/api/order', orderRouter)

// app.get("/",(req,res)=>{
//         res.send("API working")
// })

// app.listen(port,()=>{
//     console.log(`Server started on http://localhost:${port}`)
// })

// //mongodb+srv://dulanjalisenarathna93:E2JUb0zfaT2FVp8D@cluster0.exkxkun.mongodb.net/?



import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import 'dotenv/config';

// app config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// API endpoints
app.use("/api/user", userRouter);
app.use("/api/food", foodRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// ✅ Serve static images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "uploads")));

// ✅ Debug route: List all images in 'uploads' folder
app.get("/test-images", async (req, res) => {
    try {
        const files = await fs.promises.readdir(path.join(__dirname, "uploads"));
        res.json({ files });
    } catch (error) {
        console.error("Error reading uploads folder:", error);
        res.status(500).json({ error: "Failed to read uploads folder" });
    }
});

// Root API
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start the server
app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
