import React from "react";
import { Image } from "react-native";
import gloves from "../../../assets/images/gloves.png";
import vr from "../../../assets/images/vr.png";
import taste from "../../../assets/images/tastes.png";
import mask from "../../../assets/images/mask.png";
import { useNavigation } from "react-navigation-hooks";

import { Container, Title, Button, Img, Desc } from "./styles";

const LoadScreen = () => {
  const { navigate, getParam } = useNavigation();

  const optionParam = getParam("options");

  const imgOptions = optionParam.img;

  let opt;

  if (imgOptions === "vr") {
    opt = vr;
  } else if (imgOptions === "gloves") {
    opt = gloves;
  } else if (imgOptions === "taste") {
    opt = taste;
  } else {
    opt = mask;
  }

  return (
    <Container>
      <Desc>{optionParam.title}</Desc>
      <Img>
        <Image source={opt} />
      </Img>
      <Button
        onPress={() => {
          navigate(optionParam.route, {
            options: {
              video: optionParam.video,
            },
          });
        }}
      >
        <Title>{optionParam.btn}</Title>
      </Button>
    </Container>
  );
};

export default LoadScreen;
