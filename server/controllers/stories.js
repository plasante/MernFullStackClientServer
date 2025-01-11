import mongoose from 'mongoose';
import Story from "../models/storyContent.js";

const getStories = async (req, res) => {
  const story = await Story.find();
  try {
    res.status(200).json(story);
  } catch(error) {
    res.status(404).json({message: error.message});
  }
}

const createStory = async (req, res) => {
  const body = req.body;
  const newStory = new Story({
    ...body
  });
  try {
    await newStory.save();
    res.status(201).json(newStory);
  } catch(error) {
    res.status(409).json({message: error.message});
  }
}

const updateStory = async (req, res) => {
  const _id = req.params.id;
  const story = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("This id does not exist!");
  }

  const updatedStory = await Story.findByIdAndUpdate(_id, story, {new: true});

  res.json(updatedStory);
}

const deleteStory = async (req, res) => {
  // Get the id from the request params http://localhost:5001/123
  const id = req.params.id;

  // Check if the id exists in the DB
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("The story with id does not exist!");
  }

  await Story.findByIdAndDelete(id);

  res.json("Story deleted successfully.");
}

export { getStories, createStory, updateStory, deleteStory };