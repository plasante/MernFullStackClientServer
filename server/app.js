import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

const MONGO_URI = "mongodb+srv://plasante:----@cluster0.enctu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



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