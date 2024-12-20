import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ashwin:Dude0007@cluster0.q39nb.mongodb.net/fooddelivery').then(()=>{
       console.log('DB connected') ;
    })
}