import React from "react";
import { View } from "react-native";

import { Primary, Secondary } from "../../Config";
import nature from "../../../assets/images/fores.jpg";
import couple from "../../../assets/images/couple.jpg";
import { useNavigation } from "react-navigation-hooks";

import { Container, StepTitle, Step, ImgUp, Blur } from "./styles";

const Steps = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ImgUp source={nature}>
        <Blur />
        <Step
          color={Secondary}
          onPress={() => {
            navigate("Receive");
          }}
        >
          <StepTitle>Receive Sense</StepTitle>
        </Step>
      </ImgUp>
      <ImgUp source={couple}>
        <Blur />
        <Step color={Primary}>
          <StepTitle>Record Sense</StepTitle>
        </Step>
      </ImgUp>
    </Container>
  );
};

export default Steps;
