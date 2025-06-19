import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://narsijangid01:12345678nj@cluster0.x8tzdfv.mongodb.net/Yummygo?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log("DB Connected"))
}

