import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Welcome from "../Pages/Welcome";
import Steps from "../Pages/Steps";
import Receive from "../Pages/Receive";
import Taste from "../Pages/Taste";

export default () =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        Steps,
        Receive,
        Taste,
      },
      {
        initialRouteName: "Welcome",
      }
    )
  );
