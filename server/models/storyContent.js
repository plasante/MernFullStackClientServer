import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  caption: { type: String },
  username: { type: String },
  userId: { type: String, required: true },
  image: { type: String }, tags: String,
  likes: { type: [String], default: [] },
  postDate: { type: Date, default: Date.now },
})

export default mongoose.model('Story', storySchema);