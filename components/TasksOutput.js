import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import Task from "./ui/Task";
import { Colors } from "../Colors";
import NewTaskButton from "./ui/NewTaskButton";

export default function TasksOutput({ tasks, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <NewTaskButton navigation={navigation} />,
    });
  }, [navigation]);

  const renderTask = ({ item }) => {
    return <Task task={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(task) => task.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main200,
    paddingRight: 16,
  },
});
