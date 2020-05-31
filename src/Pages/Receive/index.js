import React from "react";
import { Red, Primary, Secondary } from "../../Config";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

import { Container, CardTitle, Card } from "./styles";

const Receive = () => {
  return (
    <Container>
      <Card color={Red}>
        <CardTitle>Visual Experience</CardTitle>
        <MaterialCommunityIcons name="glasses" size={24} color="black" />
      </Card>
      <Card color={Secondary}>
        <CardTitle>Touchable and Tastable</CardTitle>
        <MaterialIcons name="touch-app" size={24} color="black" />
      </Card>
      <Card color={Primary}>
        <CardTitle>Sound Experience</CardTitle>
        <Entypo name="sound" size={24} color="black" />
      </Card>
    </Container>
  );
};

export default Receive;
