import React from "react";

import { Container, Title, Button, BtnText } from "./styles";

import { useNavigation } from "react-navigation-hooks";

const Welcome = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Title>Welcome to Senses</Title>
      <Button
        onPress={() => {
          navigate("Steps");
        }}
      >
        <BtnText>Let's have one daily experience</BtnText>
      </Button>
    </Container>
  );
};

export default Welcome;
