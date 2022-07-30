import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../Colors";
export default function InputField({
  placeholder,
  onChangeHandler,
  value,
  isSecure,
  multiLine,
  numOfLines,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, focused && styles.focused]}
        placeholder={placeholder}
        onChangeText={(text) => onChangeHandler(text)}
        value={value}
        secureTextEntry={isSecure}
        placeholderTextColor={focused ? "transparent" : Colors.main500}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        multiline={multiLine}
        numberOfLines={numOfLines}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "70%",
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: Colors.main500,
    fontSize: 16,
    paddingBottom: 16,
    marginBottom: 28,
  },
  focused: {
    borderBottomWidth: 4,
    marginBottom: 26,
  },
});
