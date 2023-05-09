import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "./screens/AuthScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import RidesScreen from "./screens/RidesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "none" }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Rides"
          component={RidesScreen}
          options={{ animation: "slide_from_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
