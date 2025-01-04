import mongoose from 'mongoose';

const storySchema = new mongoose.Schema({
  caption: {
    type: String
  },
  username: {
    type: String
  },
  userId: {
    type: String
  },
  image: {
    type: String
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