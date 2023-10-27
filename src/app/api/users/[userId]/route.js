import { connectDB } from "@/DataBase/config";
import { NextResponse } from "next/server";
import { User } from "@/models/user";
connectDB();

// delete user from database
export async function DELETE(request,{params}) {

  const { userId } = params;
  try {
    if (!userId) return NextResponse.json({ message: "Please provide a userId" })
    await User.deleteOne({ _id: userId });
    return NextResponse.json({ success: "User Deleted successfully", status: 201 });
    
  } catch (error) {
    return NextResponse.json({ error: error });

    
  }
  
  
}

// get user information from database
export const GET = async (request, { params }) => {
  
  const { userId } = params;

  try {
    const user = await User.findOne({ id: userId });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error });
    
  }
  
}

// update a user 
export const PUT = async (request, { params }) => {

  const { userId } = params;
  const { name, password, about, profileUrl } = await request.json();
  try {
    const user = await User.findById({ _id: userId });
    user.name = name;
    user.password = password;
    user.about = about;
    user.profileUrl = profileUrl;
    const updatedUser = await user.save();
    return NextResponse.json({ message: "successfully updated user" });

  } catch (error) {

    return NextResponse.json({error:error.message});
    
  }
  
}


