import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./RootNavigation";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import SignIn from "./screens/SignIn";
import AllTasks from "./screens/AllTasks";
import History from "./screens/History";
import NewTask from "./screens/NewTask";
import MyTasks from "./screens/MyTasks";
import TasksContextProvider from "./store/tasks";
import { Colors } from "./Colors";
import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();

export default function App() {
  const [username, setUsername] = useState("");
  const [valid, setValid] = useState(false);
  const login = (user) => {
    setValid(true);
    user && setUsername(user);
  };

  return (
    <>
      <StatusBar style="dark" />
      <TasksContextProvider>
        <NavigationContainer ref={navigationRef}>
          {valid ? (
            <Drawer.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: Colors.main500,
                },
                headerTintColor: Colors.main200,
                drawerStyle: {
                  backgroundColor: Colors.main500,
                },
                drawerActiveTintColor: Colors.main200,
                drawerActiveBackgroundColor: Colors.main400,
                drawerInactiveTintColor: Colors.main300,
                drawerLabelStyle: {
                  fontSize: 16,
                  fontWeight: "bold",
                },
              }}
              drawerContent={(props) => (
                <DrawerContentScrollView {...props}>
                  <DrawerItem
                    label={`Hello, ${username}`}
                    labelStyle={{
                      color: Colors.main200,
                      fontSize: 22,
                      fontWeight: "100",
                    }}
                  />
                  <DrawerItemList {...props} />
                  <DrawerItem
                    label="Logout"
                    labelStyle={{
                      color: Colors.main300,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                    icon={() => (
                      <Ionicons
                        name="log-out-outline"
                        size={24}
                        color={Colors.main300}
                      />
                    )}
                    onPress={() => setValid(false)}
                  />
                </DrawerContentScrollView>
              )}
            >
              <Drawer.Screen
                options={{
                  drawerIcon: ({ focused }) => (
                    <Ionicons
                      name="list"
                      size={24}
                      color={focused ? Colors.main200 : Colors.main300}
                    />
                  ),
                  title: "All Tasks",
                }}
                component={AllTasks}
                name="AllTasks"
                initialParams={{ currentUser: username }}
              />
              <Drawer.Screen
                options={{
                  drawerIcon: ({ focused }) => (
                    <Ionicons
                      name="add"
                      size={24}
                      color={focused ? Colors.main200 : Colors.main300}
                    />
                  ),
                  title: "New Task",
                }}
                component={NewTask}
                name="NewTask"
              />
              <Drawer.Screen
                options={{
                  drawerIcon: ({ focused }) => (
                    <Ionicons
                      name="archive"
                      size={24}
                      color={focused ? Colors.main200 : Colors.main300}
                    />
                  ),
                  title: "History",
                }}
                component={History}
                name="History"
              />
              <Drawer.Screen
                options={{
                  drawerIcon: ({ focused }) => (
                    <Ionicons
                      name="body"
                      size={24}
                      color={focused ? Colors.main200 : Colors.main300}
                    />
                  ),
                  title: "My Tasks",
                }}
                component={MyTasks}
                name="MyTasks"
                initialParams={{ currentUser: username }}
              />
            </Drawer.Navigator>
          ) : (
            <SignIn validate={login} />
          )}
        </NavigationContainer>
      </TasksContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
