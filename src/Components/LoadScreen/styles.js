import styled from "styled-components/native";
import Constants from "expo-constants";
import { Primary, Secondary } from "../../Config";

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + "px"};
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
width:60%
justify-content:center;
align-items:center;
background:${Primary};
padding:22px 0;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const Img = styled.View`
  justify-content: center;
  align-items: center;
  border: 6px solid ${Secondary};
  border-radius: 4px;
  margin-bottom: 22px;
`;

export const Desc = styled.Text`
  width: 80%;
  text-align: center;
  font-size: 20px;
  font-family: Montserrat SemiBold;
  color: ${Primary};
  margin-bottom: 22px;
`;
