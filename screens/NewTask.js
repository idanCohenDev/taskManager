import { StyleSheet, View, Alert, KeyboardAvoidingView } from "react-native";
import React, { useContext, useState } from "react";
import { Colors } from "../Colors";
import InputField from "../components/ui/InputField";
import Button from "../components/ui/Button";
import { TasksContext } from "../store/tasks";
import TaskItem from "../store/TaskItem";
import Title from "../components/ui/Title";
import SubText from "../components/ui/SubText";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export default function NewTask({ navigation }) {
  const tasksCtx = useContext(TasksContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [worker, setWorker] = useState("");
  const pressHandler = () => {
    if (!title || !worker) {
      Alert.alert(
        "Oops...",
        "Seems like you missed a title or a worker's name."
      );
    } else {
      const newTask = new TaskItem(uuidv4(), title, description, worker, 0);
      tasksCtx.addTask(newTask);
      setTitle("");
      setDescription("");
      setWorker("");
      navigation.navigate("AllTasks");
    }
  };
  return (
    <KeyboardAvoidingView style={styles.rootContainer} behavior="position">
      <View style={styles.container}>
        <Title>Add New Task</Title>
        <SubText style={styles.subText}>
          Title and worker's name are required.
        </SubText>
        <InputField
          placeholder="Enter task title..."
          onChangeHandler={setTitle}
          value={title}
        />

        <InputField
          placeholder="Enter task description..."
          onChangeHandler={setDescription}
          value={description}
          multiLine={true}
          numOfLines={4}
        />

        <InputField
          placeholder="Enter task worker..."
          onChangeHandler={setWorker}
          value={worker}
        />
        <Button onPress={pressHandler} containerStyle={{ marginTop: 24 }}>
          Add
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.main200,
    padding: 24,
  },
  container: {
    alignItems: "center",
  },
});
