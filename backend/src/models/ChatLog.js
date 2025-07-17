import mongoose from 'mongoose';

const ChatLogSchema = new mongoose.Schema(
  {
    userId: String,
    messages: [{ role: String, content: String, timestamp: Date }],
  },
  { timestamps: true }
);

export default mongoose.model('ChatLog', ChatLogSchema);
