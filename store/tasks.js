import { createContext, useReducer, useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Build the computer",
    description: "Build the new computer for the new developer.",
    worker: "Nir",
    status: 0,
  },
  {
    id: 2,
    title: "Fix the bug",
    description: "Fix the bug in the latest build of the application.",
    worker: "Idan",
    status: 2,
  },
  {
    id: 3,
    title: "Style the button",
    description: "Style the new 'Send' button",
    worker: "Yahiel",
    status: 3,
  },
];

export const TasksContext = createContext({
  tasks: [],
  addTask: (NewTask) => {},
  updateTask: (id, status) => {},
  deleteTask: (id) => {},
});

const tasksReducer = (currentTasks, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...currentTasks];
    case "UPDATE":
      const updateableTaskIndex = currentTasks.findIndex(
        (task) => task.id === action.payload.id
      );
      const updateableTask = currentTasks[updateableTaskIndex];
      const updatedTask = { ...updateableTask, status: action.payload.status };
      const updatedTasks = [...currentTasks];
      updatedTasks[updateableTaskIndex] = updatedTask;
      return updatedTasks;
    case "DELETE":
      return currentTasks.filter((task) => task.id !== action.payload);
    default:
      return currentTasks;
  }
};

export default function TasksContextProvider({ children }) {
  const [tasksState, dispatch] = useReducer(tasksReducer, DUMMY_DATA);
  const [user, setUser] = useState("");

  const addTask = (newTask) => {
    dispatch({ type: "ADD", payload: newTask });
  };

  const updateTask = (id, status) => {
    dispatch({ type: "UPDATE", payload: { id: id, status: status } });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value = {
    tasks: tasksState,
    addTask: addTask,
    updateTask: updateTask,
    deleteTask: deleteTask,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
}
