import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:5001' });

// This is going to happen before all the request above
// We do this because we have to send the token to the backend
api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    const profile = JSON.parse(localStorage.getItem("profile"));
    req.headers.Authorization = `Bearer ${profile.token}`;
  }
  return req;
});

export const fetchStories = () => api.get("stories");
export const createStory = async (story) => api.post("stories", story);
export const updateStory = async (id, story) => api.patch(`${"stories"}/${id}`, story);
export const deleteStory = async (id) => api.delete(`${"stories"}/${id}`);
export const likeStory = async (id) => api.patch(`${"stories"}/${id}/likeStory`);

export const login = async (formValues) => api.post("/user/login", formValues);
export const signup = async (formValues) => api.post("/user/signup", formValues);