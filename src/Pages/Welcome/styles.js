import styled from "styled-components/native";
import Constants from "expo-constants";
import { Primary, Red } from "../../Config";

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + "px"};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: Montserrat Regular;
  color: ${Primary};
  margin-bottom: 22px;
`;

export const Button = styled.TouchableOpacity`
  padding: 12px;
  background: ${Red};
`;

export const BtnText = styled.Text`
  font-size: 16px;
  font-family: Montserrat Bold;
`;
