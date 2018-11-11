const initialState = {
  projects: [
    { id: 1, title: "some title", content: "blah blah blah" },
    { id: 2, title: "some other title", content: "blah blah blah" },
    { id: 3, title: "some anothr title", content: "blah blah blah" }
  ]
};

const projectReducer = (state = initialState, action) => {
  return state;
};

export default projectReducer;
