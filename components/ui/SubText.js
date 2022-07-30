import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Colors";

export default function SubText({ children }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.continueText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    marginBottom: 60,
  },
  continueText: {
    fontSize: 16,
    color: Colors.main400,
  },
});
