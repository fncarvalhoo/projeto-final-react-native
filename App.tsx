import { Home } from "../projeto-final-react-native/src/Screen/Home/index";
import { Login } from "./src/Screen/Login";
import {Cliente} from "./src/Screen/Cliente"

 function App() {
  
  return (
<<<<<<< HEAD
    <Cliente/>
// <<<<<<< HEAD
//     <Cliente />
//   )  
// =======
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Cadastro"
//           component={Cadastro}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// >>>>>>> main
  )
=======
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
>>>>>>> main
}

export default App
