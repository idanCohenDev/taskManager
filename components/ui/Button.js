import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../Colors";

export default function Button({ children, onPress, containerStyle, textStyle }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <View style={[styles.innerContainer, containerStyle]}>
        <Text style={[styles.buttonText, textStyle]}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: Colors.main500,
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: Colors.main200,
    fontWeight: "100",
    fontSize: 24,
  },
  pressed: {
    opacity: 0.7,
  },
});
