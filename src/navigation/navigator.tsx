import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "@Screens/Home/Home";
import AboutScreen from "@Screens/About/About";
const RootStack = createStackNavigator();

const RootNavigator: React.FC<{}> = () => (
  <RootStack.Navigator>
    <RootStack.Screen name="Home" component={HomeScreen}/>
    <RootStack.Screen name="About" component={AboutScreen}/>
  </RootStack.Navigator>
)

export default RootNavigator;