import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const AboutScreen: React.FC<{}> = () => {
  const Navigation = useNavigation();
  return (
    <View style={{flex: 1, width: "100%", height: 500}}>
      <Text style={{color: "black"}}>About Page</Text>
      <TouchableOpacity onPress={() => Navigation.navigate("Home")}>
        <Text>Go home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AboutScreen;