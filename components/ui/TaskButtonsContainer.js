import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Button from "../ui/Button";
import { Colors } from "../../Colors";
import { TasksContext } from "../../store/tasks";
export default function TaskButtonsContainer({ id }) {
  const tasksCtx = useContext(TasksContext);
  const updateTask = (status) => tasksCtx.updateTask(id, status);
  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonContainer}>
        <Button
          containerStyle={[
            styles.container,
            { backgroundColor: Colors.incomplete },
          ]}
          textStyle={styles.text}
          onPress={() => updateTask(1)}
        >
          Decline
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          containerStyle={[
            styles.container,
            { backgroundColor: Colors.progress },
          ]}
          textStyle={styles.text}
          onPress={() => updateTask(2)}
        >
          Progress
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          containerStyle={[
            styles.container,
            { backgroundColor: Colors.finish },
          ]}
          textStyle={styles.text}
          onPress={() => updateTask(3)}
        >
          Done
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 16,
  },
  container: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    width: "100%",
    marginTop: 16,
    borderRadius: 36,
  },
  text: {
    color: "#333",
    fontWeight: "400",
    fontSize: 20,
  },
});
