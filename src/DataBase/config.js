import mongoose from "mongoose"
import { User } from "@/models/user";
export const connectDB = async () => {
  

  try {
    const {connection}=await mongoose.connect(String(process.env.MONGO_DB_URL), {
      dbName: "todo",
      
    })
    console.log(`Database Connection established`, connection.host);
    // const user = new User({
    //   name: "jhon doe",
    //   email: "jhondor@gmail.com",
    //   password: "kjnkjnjknfkjwnf",
    //   about: "He is a great man",
    //   profileUrl:"http//www.gmail.com",
    // });
    // await user.save();
    // console.log(`User saved successfully`);
    
  } catch (error) {
    console.log(`Error connecting to Database`);
    console.log(error);

    
  }
  
}