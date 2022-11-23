import { Home } from "../projeto-final-react-native/src/Screen/Home/index";
import { Cadastro } from "./src/Screen/Cadastro";
import { Login } from "./src/Screen/Login";
import { Cliente } from "./src/Screen/Cliente/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     {/* <Stack.Screen
    //       name="Home"
    //       component={Home}
    //       options={{ headerShown: false }}
    //     /> */}
    //     <Stack.Screen
    //       name="Login"
    //       component={Login}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Cadastro"
    //       component={Cadastro}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Cliente />
  );
}
