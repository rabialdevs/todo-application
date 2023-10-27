// ! api/users/[userId]/tasks
import { Task } from "@/models/task";
import { NextRequest } from "next/server";


export async function GET(request, { params }) {
  
  const { userId } = params;
  try {
    let tasks = await Task.find({ userId: userId });
    return NextRequest.json({ tasks });
  } catch (error) {
    return NextRequest.json({ error: error.message });
    
  }
}
