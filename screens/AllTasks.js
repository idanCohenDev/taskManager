import React, { useContext } from "react";
import TasksOutput from "../components/TasksOutput";
import { TasksContext } from "../store/tasks";

export default function AllTasks({ route, navigation }) {
  console.log("Hello WORLD");
  const { currentUser } = route.params;
  const tasksCtx = useContext(TasksContext);
  const tasksToShow = tasksCtx.tasks.filter((task) => task.status !== 3);
  return <TasksOutput tasks={tasksToShow} navigation={navigation} />;
}
