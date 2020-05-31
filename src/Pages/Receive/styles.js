import styled from "styled-components/native";
import Constants from "expo-constants";
import { Primary, Red } from "../../Config";

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + "px"};
  justify-content: space-around;
  align-items: center;
`;

export const Card = styled.TouchableOpacity`
  width: 80%;
  background:${(props) => props.color}
  justify-content:center;
  align-items:center;
  height: 20%;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-family: Montserrat Regular;
  color: #fff;
`;
