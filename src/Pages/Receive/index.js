import React from "react";
import { useNavigation } from "react-navigation-hooks";
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
  const { navigate } = useNavigation();
  return (
    <Container>
      <BackButton
        onPress={() => {
          navigate("Steps");
        }}
      >
        <Ionicons name="md-arrow-round-back" size={24} color="black" />
        <Back>Back</Back>
      </BackButton>
      <Card
        onPress={() => {
          navigate("LoadScreen", {
            options: {
              title: "Prepare your Flavour gadget for a better experience",
              route: "Senses",
              img: "taste",
              video: "eFBNYwStw04",
              btn: "Start",
            },
          });
        }}
        color={Secondary}
      >
        <CardInner>
          <CardTitle>Taste</CardTitle>
          <MaterialCommunityIcons name="food" size={24} color="#fff" />
        </CardInner>
        <CardImage source={taste} />
      </Card>
      <Card
        onPress={() => {
          navigate("LoadScreen", {
            options: {
              title: "Prepare your Haptice suit for a better experience",
              route: "Senses",
              img: "gloves",
              video: "BbT_e8lWWdo",
              btn: "Start",
            },
          });
        }}
        color={Red}
      >
        <CardInner>
          <CardTitle>Touch</CardTitle>
          <MaterialIcons name="touch-app" size={24} color="#fff" />
        </CardInner>
        <CardImage source={touch} />
      </Card>
      <Card
        onPress={() => {
          navigate("LoadScreen", {
            options: {
              title: "Prepare your Mask for a better experience",
              route: "Senses",
              img: "mask",
              video: "7AkbUfZjS5k",
              btn: "Start",
            },
          });
        }}
        color={Yellow}
      >
        <CardInner>
          <CardTitle>Smell</CardTitle>
          <Foundation name="trees" size={24} color="#fff" />
        </CardInner>
        <CardImage source={smell} />
      </Card>
      <Card
        onPress={() => {
          navigate("LoadScreen", {
            options: {
              title: "Prepare your VR for a better experience",
              route: "Senses",
              img: "vr",
              video: "BbT_e8lWWdo",
              btn: "Start",
            },
          });
        }}
        color={Gray}
      >
        <CardInner>
          <CardTitle>Sight</CardTitle>
          <MaterialCommunityIcons name="glasses" size={24} color="#fff" />
        </CardInner>
        <CardImage source={sight} />
      </Card>
      <Card
        onPress={() => {
          navigate("LoadScreen", {
            options: {
              title: "Prepare your VR for a better experience",
              route: "Senses",
              img: "vr",
              video: "DTlzIGFrL_4",
              btn: "Start",
            },
          });
        }}
        color={Primary}
      >
        <CardInner>
          <CardTitle>Sound</CardTitle>
          <Entypo name="sound" size={24} color="#fff" />
        </CardInner>
        <CardImage source={hear} />
      </Card>
    </Container>
  );
};

export default Receive;
