import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Colors";
import { Ionicons } from "@expo/vector-icons";

export default function NewTaskButton({ navigation }) {
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("NewTask")}
    >
      <Ionicons name="add" size={24} color={Colors.main200} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
});
