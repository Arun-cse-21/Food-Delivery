import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://earun:210001@cluster0.fupfepr.mongodb.net/food-del').then(()=> console.log("DB connected"));
}