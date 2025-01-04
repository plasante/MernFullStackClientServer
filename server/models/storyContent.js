import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  caption: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  tags: String,
  likes: {
    type: Number,
    default: 0
  },
  postDate: {
    type: Date,
    default: Date.now
  },
})

export default mongoose.model('Story', storySchema);