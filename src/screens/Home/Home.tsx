import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen: React.FC<{}> = () => {
  const Navigation = useNavigation();
  return (
    <View style={{flex: 1, width: "100%", height: 500}}>
      <Text style={{color: "black"}}>Hello, world</Text>
      <TouchableOpacity onPress={() => Navigation.navigate("About")}>
        <Text>Go to About</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen;