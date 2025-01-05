const storyReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_STORIES":
      return state;
    case "CREATE_STORY":
      return state;
    default:
      return state;
  }
}

export default storyReducer;