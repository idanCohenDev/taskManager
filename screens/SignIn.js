import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InputField from "../components/ui/InputField";
import { Colors } from "../Colors";
import { SafeAreaView } from "react-native";
import Button from "../components/ui/Button";
import Title from "../components/ui/Title";
import SubText from "../components/ui/SubText";
import * as RootNavigation from "../RootNavigation";

export default function SignIn({ validate}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameHandler = (text) => setUsername(text);
  const passwordHandler = (text) => setPassword(text);

  const pressHandler = () => {
     validate(username);
    RootNavigation.navigate("AllTasks");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Title>Task Manager</Title>
        <View style={styles.textContainer}>
          <SubText style={styles.subText}>Sign in to continue</SubText>
        </View>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Enter username..."
            onChangeHandler={usernameHandler}
            value={username}
            isSecure={false}
          />
          <InputField
            placeholder="Enter password..."
            onChangeHandler={passwordHandler}
            value={password}
            isSecure={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button containerStyle={{ marginTop: 16 }} onPress={pressHandler}>
            Login
          </Button>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main200,
  },
  inputContainer: {
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
});
