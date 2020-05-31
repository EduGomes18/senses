import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Welcome from "../Pages/Welcome";
import Steps from "../Pages/Steps";
import Receive from "../Pages/Receive";
import Record from "../Pages/Record";
import Senses from "../Components/Senses";
import LoadScreen from "../Components/LoadScreen";

export default () =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        Steps,
        Receive,
        Senses,
        LoadScreen,
        Record,
      },
      {
        initialRouteName: "Welcome",
      }
    )
  );
