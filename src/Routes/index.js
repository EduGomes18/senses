import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Welcome from "../Pages/Welcome";
import Steps from "../Pages/Steps";
import Receive from "../Pages/Receive";

export default () =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        Steps,
        Receive,
      },
      {
        initialRouteName: "Welcome",
      }
    )
  );
