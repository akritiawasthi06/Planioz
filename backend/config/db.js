import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://akritiawasthi0606:akritiawasthi0606@cluster0.k363ksq.mongodb.net/reactjs-food-delivery-app').then(()=>{console.log("DB connected")});
}
// adarshad28996
// ankitgp555
//mongodb+srv://adarshad28996:<db_password>@cluster0.ufrbh8l.mongodb.net/
// mongodb+srv://akritiawasthi0606:<db_password>@cluster0.k363ksq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 