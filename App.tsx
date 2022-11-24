import { NavigationContainer } from "@react-navigation/native";
import { ProvedorCarrinho } from "./src/Context/CarrinhoContext";
import Routes from "./src/Routes/Routes";

export default function App() {
  return (
    <ProvedorCarrinho>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </ProvedorCarrinho>
  );
}