import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  addedDate: {
    type: Date,
    default:Date.now()
  },
  status: {
    type: String,
    enum: [ 'pending', 'completed' ],
    default: 'pending'
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    require:true,
  }
  


}, { timestamps: true })

export const Task = mongoose.models.tasks || mongoose.model('tasks',TaskSchema);