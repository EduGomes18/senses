import React from "react";
import { Red, Primary, Secondary, Gray, Yellow } from "../../Config";
import taste from "../../../assets/images/pizza.jpg";
import smell from "../../../assets/images/smell-2.jpg";
import hear from "../../../assets/images/hear.jpg";
import touch from "../../../assets/images/touch.jpg";
import sight from "../../../assets/images/sight.jpg";

import {
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";

import {
  Container,
  CardTitle,
  Card,
  CardImage,
  CardInner,
  BackButton,
  Back,
} from "./styles";

const Receive = () => {
  return (
    <Container>
      <BackButton>
        <Ionicons name="md-arrow-round-back" size={24} color="black" />
        <Back>Back</Back>
      </BackButton>
      <Card color={Secondary}>
        <CardInner>
          <CardTitle>Taste</CardTitle>
          <MaterialCommunityIcons name="food" size={24} color="#fff" />
        </CardInner>
        <CardImage source={taste} />
      </Card>
      <Card color={Red}>
        <CardInner>
          <CardTitle>Touch</CardTitle>
          <MaterialIcons name="touch-app" size={24} color="#fff" />
        </CardInner>
        <CardImage source={touch} />
      </Card>
      <Card color={Yellow}>
        <CardInner>
          <CardTitle>Smell</CardTitle>
          <Foundation name="trees" size={24} color="#fff" />
        </CardInner>
        <CardImage source={smell} />
      </Card>
      <Card color={Gray}>
        <CardInner>
          <CardTitle>Sight</CardTitle>
          <MaterialCommunityIcons name="glasses" size={24} color="#fff" />
        </CardInner>
        <CardImage source={sight} />
      </Card>
      <Card color={Primary}>
        <CardInner>
          <CardTitle>Hearing</CardTitle>
          <Entypo name="sound" size={24} color="#fff" />
        </CardInner>
        <CardImage source={hear} />
      </Card>
    </Container>
  );
};

export default Receive;
