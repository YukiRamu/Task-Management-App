/* Reducer for Tasklist */
const TaskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      console.log(action.payload);
      console.log("state is ", state);
      return { ...state, tasks: state.tasks.filter(elem => elem.taskId !== action.payload) };
      return { tasks: state.tasks.filter(elem => elem.taskId !== action.payload) };
    default:
      throw Error("Action name not defined");
  }
};

export default TaskReducer;