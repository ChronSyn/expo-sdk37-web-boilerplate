import React from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import { Linking } from 'expo';

import NavigatorStack from '@Navigator/navigator';

const style = StyleSheet.create({
  rootElement: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#0e1113"
  },
  loadingScreenOverlay: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#0e1113",
    position: "absolute",
  },
  navigator: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#0e1113",
    zIndex: 500
  },
  apolloProviderParent: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#0e1113"
  }
})

const App: React.FC<{}> = () => {
  const NavigationContainerProps: Theme = {
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: "#0e1113"
    }
  }

  const prefix = Linking.makeUrl('/');
  const linkingConfig = {
    enabled: true,
    prefixes: [prefix],
    config: {
      app: {
        path: ""
      },
      Home: {
        path: ""
      },
      About: {
        path: "about"
      }
    }
  }

  return (
    <View style={style.rootElement}>
      <NavigationContainer theme={NavigationContainerProps} linking={linkingConfig}>
        <NavigatorStack />
      </NavigationContainer>
    </View>
  );
}

const MainApp: React.FC<{}> = () => {
  return (
    <View style={style.apolloProviderParent}>
      <App />
    </View>
  )
}
export default MainApp;