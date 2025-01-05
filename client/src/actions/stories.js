import * as api from "../api";
//import axios from "axios";

export const getStories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchStories();
    dispatch({ type: "FETCH_ALL_STORIES", payload: data });
  } catch(error) {
    console.log(error.message);
  }
}

export const createStory = (story) => async (dispatch) => {
  try {
    const { data } = await api.createStory(story);
    dispatch({ type: "CREATE_STORY", payload: data });
  } catch(error) {
    console.log(error.message);
  }
}

// export const createStory = (storyData) => async (dispatch) => {
//   try {
//     const res = await axios.post('http://localhost:5001/stories/', storyData);
//     dispatch({ type: 'CREATE_STORY', payload: res.data });
//   } catch (error) {
//     console.error(error);
//   }
// };