const initialState = {
  projects: [
    { id: 1, title: "some title", content: "blah blah blah" },
    { id: 2, title: "some other title", content: "blah blah blah" },
    { id: 3, title: "some anothr title", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return state;
    case "CREATE_PROJECT_ERROR":
      return state;
    default:
      return state;
  }
};

export default projectReducer;
