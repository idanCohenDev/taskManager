import React, { useContext } from "react";
import { TasksContext } from "../store/tasks";
import TasksOutput from "../components/TasksOutput";

export default function History({navigation}) {
  const tasksCtx = useContext(TasksContext);
  const tasksToShow = tasksCtx.tasks.filter((task) => task.status === 3);
  return <TasksOutput tasks={tasksToShow} navigation={navigation}/>;
}

