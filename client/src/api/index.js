import axios from "axios";

const url = 'http://localhost:5001/stories';

export const fetchStories = () => axios.get(url);
export const createStory = (story) => axios.post(url, story);

