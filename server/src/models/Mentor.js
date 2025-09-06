import mongoose from 'mongoose';

const MentorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: '' },
  avatar: { type: String, default: '' },
  bio: { type: String, default: '' },
  tasksCount: { type: Number, default: 0 },
  rating: { type: Number, default: 4.7 },
  reviews: { type: Number, default: 500 },
  followed: { type: Boolean, default: false },
  recent: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Mentor', MentorSchema);
