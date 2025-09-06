import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  role: { type: String, default: '' },
  category: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  progress: { type: Number, default: 0 },
  durationMinutes: { type: Number, default: 60 },
  deadlineAt: { type: Date, default: null },
  section: { type: String, enum: ['timelimit', 'new'], index: true },
  people: [{ type: String }]
}, { timestamps: true });

export default mongoose.model('Task', TaskSchema);
