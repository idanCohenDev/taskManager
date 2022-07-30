import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Colors";

export default function TaskStatus({ status }) {
  const statusSettings = () => {
    if (status === 1) {
      return { text: "Incomplete", color: Colors.incomplete };
    } else if (status === 2) {
      return { text: "In Progress", color: Colors.progress };
    } else if (status === 3) {
      return { text: "Complete", color: Colors.finish };
    } else {
      return { text: "Unknown", color: Colors.main200 };
    }
  };
  return (
    <View
      style={[styles.container, { backgroundColor: statusSettings().color }]}
    >
      <Text style={styles.text}>{statusSettings().text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 24,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#333",
    fontWeight: "500",
    fontStyle: "italic",
  },
});
