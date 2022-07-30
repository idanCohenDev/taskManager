import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../Colors";

export default function DeleteButton({ onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons name="trash" size={32} color="#fff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.incomplete,
    borderRadius: 6,
    width: 88,
    overflow: "hidden",
  },
});
