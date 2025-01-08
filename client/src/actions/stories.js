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
    // We make a post request to the backend server
    const {data} = await api.createStory(story);
    // We then update the state.stories of the store
    dispatch({ type: "CREATE_STORY", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
