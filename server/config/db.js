import mongoose from "mongoose";

export const connectDb=async()=>{
    await mongoose.connect('mongodb+srv://raghavkhandelwal13122003:IFsmL2DSm5wDK1KG@cluster0.mkemrd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log('db connected'));
}
