import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import storyRoutes from './routes/stories.js';
import userRoutes from './routes/users.js';


import { config } from 'dotenv'; // changed this line
config();

const app = express();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use((req, _, next) => {
  console.log(req.body);  // This should log the raw request body
  next();
});
app.use(cors());

// We reach this route localhost:5001/stories
app.use('/stories', storyRoutes);
app.use('/user', userRoutes);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5001;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch(err) {
    console.error("Connection to MongoDB failed", err.message);
  }
}

connectDB();

mongoose.connection.on('open', () => console.log(`Connected to MongoDB`));
mongoose.connection.on('error', (err) => console.log(err));