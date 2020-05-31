import React from "react";
import { useNavigation } from "react-navigation-hooks";
import { Red, Primary, Secondary, Gray, Yellow } from "../../Config";

import taste from "../../../assets/images/tastes.png";
import smell from "../../../assets/images/mask.png";
import hear from "../../../assets/images/vr.png";
import touch from "../../../assets/images/gloves.png";
import sight from "../../../assets/images/vr.png";

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
  RecordTitle,
} from "./styles";

const Record = () => {
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
      <RecordTitle>Choose a sense to record:</RecordTitle>
      <Card
        onPress={() => {
          navigate("LoadScreen", {
            options: {
              title: "Please connect your Flavour gadget first!",
              route: "Record",
              img: "taste",
              btn: "Back",
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
              title: "Please connect your Haptice suit first!",
              route: "Record",
              img: "gloves",
              btn: "Back",
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
              title: "Please connect your Mask first!",
              route: "Record",
              img: "mask",
              video: "7AkbUfZjS5k",
              btn: "Back",
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
              title: "Please Connect your VR first!",
              route: "Record",
              img: "vr",
              btn: "Back",
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
              title: "Please Connect your VR first!",
              route: "Record",
              img: "vr",
              btn: "Back",
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

export default Record;
