/* Reducer for Tasklist */
const TaskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      throw Error("Action name not defined");
  }
};

export default TaskReducer;