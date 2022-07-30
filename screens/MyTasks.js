import { Text } from "react-native";
import React, { useContext } from "react";
import { TasksContext } from "../store/tasks";
import TasksOutput from "../components/TasksOutput";

export default function MyTasks({ route, navigation }) {
  const tasksCtx = useContext(TasksContext);
  const { currentUser } = route.params;
  const tasksToShow = tasksCtx.tasks.filter(
    (task) =>
      currentUser.toLowerCase() === task.worker.toLowerCase() &&
      task.status !== 3
  );
  return (
    <>
      <TasksOutput tasks={tasksToShow} navigation={navigation} />
      <Text>{currentUser}</Text>
    </>
  );
}
