import { connectDB } from "@/DataBase/config";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
connectDB();

// TODO:
/*
1.create
2.get user  
3.get single user
4.update user
5.delete user
*/

export async function GET(request) {

  let user = [];
  try {
    user = await User.find({});
    return NextResponse.json(user, {
      status:201
    });

    
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 404 });
  }


  
}

// create a new user
export async function POST(request) {
  const { name, email, password, about, profileUrl } = await request.json();
  try {
    // create user object with user model
    const user = new User({ name, email, password, about, profileUrl });
    // save this object to the database
    const createUser = await user.save();

    return NextResponse.json(createUser, {
      status: 201,
    });
  } catch (error) {

    return NextResponse.json({ message: "Failed to Create User !! " });
    console.log(error);
    
  }


}