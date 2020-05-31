import React, { useState } from "react";
import * as Font from "expo-font";
import Constants from "expo-constants";
import { AppLoading } from "expo";
import { StyleSheet, View } from "react-native";

const fetchFonts = () => {
  return Font.loadAsync({
    "Montserrat Black": require("./assets/fonts/Montserrat-Black.ttf"),
    "Montserrat Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });
};

import Base from "./src/Base";

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#E2283D",
    height: Constants.statusBarHeight,
  },

  // rest of the styles
});

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <>
      {Platform.OS === "ios" && <View style={styles.statusBar} />}
      <Base />
    </>
  );
}
