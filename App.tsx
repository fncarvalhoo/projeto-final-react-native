import { Home } from "../projeto-final-react-native/src/Screen/Home/index";
import { Register } from "./src/Screen/Register";
import { Login } from "./src/Screen/Login";
import { PageClient } from "./src/Screen/PageClient/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Carrinho } from "./src/Screen/Carrinho";
import { ProvedorCarrinho } from "./src/Context/CarrinhoContext";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ProvedorCarrinho>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PageClient"
          component={PageClient}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Carrinho"
          component={Carrinho}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </ProvedorCarrinho>
  );
}
