import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// ! get all the tasks
export async function GET(request) {

  try {
    const tasks = await Task.find({});
    return NextResponse.json(tasks,{success:'successfully get all tasks'});
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

// ! create a new task
export async function POST(request) {
  const { title, content, userId } = await request.json();
  try {
    let task = new Task({ title, content, userId });
    const createdTask = await task.save();
    return NextResponse.json({
      task: createdTask,
      message: "Task saved successfully",
    });
  } catch (error) {
    return NextResponse.json({ message:'User Not Created !!' });
  }
}

export function PUT(request) {

}
