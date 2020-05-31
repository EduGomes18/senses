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
        <BtnText>Start my Sense experience</BtnText>
      </Button>
    </Container>
  );
};

export default Welcome;
