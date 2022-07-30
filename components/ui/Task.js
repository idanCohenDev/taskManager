import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import React, { useContext, useState } from "react";
import { Colors } from "../../Colors";
import TaskStatus from "./TaskStatus";
import TaskButtonsContainer from "./TaskButtonsContainer";
import { Swipeable } from "react-native-gesture-handler";
import { TasksContext } from "../../store/tasks";
import DeleteButton from "./DeleteButton";

export default function Task({ task }) {
  const [showTask, setShowTask] = useState(false);
  const tasksCtx = useContext(TasksContext);

  return (
    <Pressable
      style={styles.rootContainer}
      onPress={() => setShowTask(!showTask)}
    >
      <Swipeable
        renderRightActions={() => (
          <DeleteButton
            onPress={() => {
              tasksCtx.deleteTask(task.id);
            }}
          />
        )}
      >
        <View style={styles.container}>
          <Text style={styles.title}>{task.title}</Text>
          {showTask && (
            <Text style={styles.description}>{task.description}</Text>
          )}
          <View style={styles.statusContainer}>
            <TaskStatus status={task.status} />
            <Text style={styles.worker}>{task.worker}</Text>
          </View>
          {showTask && <TaskButtonsContainer id={task.id} />}
        </View>
      </Swipeable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 16,
  },
  container: {
    padding: 16,
    backgroundColor: Colors.main500,
    borderRadius: 6,
    marginLeft: 16,
  },
  title: {
    color: Colors.main200,
    textAlign: "center",
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "700",
  },
  description: {
    color: Colors.main200,
    marginBottom: 16,
    fontSize: 16,
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  worker: {
    color: Colors.main200,
    fontWeight: "900",
  },
});
