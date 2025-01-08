import axios from "axios";

const url = 'http://localhost:5001/stories';

export const fetchStories = () => axios.get(url);
// export const createStory = (story) => axios.post(url, JSON.stringify(story), {
//   headers: {
//       'Content-Type': 'application/json'
//   },
// });
export const createStory = async (story) => axios.post(url, story);
export const updateStory = async (id, story) => axios.patch(`${url}/${id}`, story);
