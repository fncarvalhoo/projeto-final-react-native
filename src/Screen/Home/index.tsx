import { View, Text, StatusBar, ScrollView, TouchableOpacity, Image } from "react-native";
import logoNav from "../../Assets/LogoNav.png";
import { styles } from "./styled";

export const Home = () => {
  return (
    <View style={styles.containerBackground}>
      <ScrollView>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="black"
        />
        <View >
          <View style={styles.nav}>
          <TouchableOpacity style={styles.button}> 
                <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <Image source={logoNav} style={styles.logo} 
            />

        </View>
      </ScrollView>
    </View>
  );
};
