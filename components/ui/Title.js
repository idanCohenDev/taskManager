import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: Colors.main500,
    fontWeight: "100",
    fontSize: 48,
    marginVertical: 60,
    textAlign: "center",
  },
});
