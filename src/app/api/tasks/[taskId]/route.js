// ! api/tasks/taskId
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// todo get single task
export async function GET(request, { params }) {
  const { taskId } = params;
  const task = await Task.findById(taskId);

  return NextResponse.json(task);
}

// todo: update task

export async function POST(request, { params }) {
  const { taskId } = params;
  const { title, content, status } = await request.json();
  try {
    const task = await findById(taskId);
    task.title = title;
    task.content = content;
    task.status = status;
    const updatedTask = await task.save();
    return NextResponse.json(updatedTask);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
//! Delete a task
export async function PUT(request, { params }) {

  const { taskId } = params;
  await Task.deleteOne(taskId);
  return NextResponse.json({message: 'successfully deleted task'});
}
