import styled from "styled-components/native";
import Constants from "expo-constants";
import { Primary } from "../../Config";

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight + "px"};
  justify-content: flex-start;
  align-items: center;
`;

export const Step = styled.TouchableOpacity`
  width: 60%;
  opacity: 0.7;
  justify-content: center;
  align-items: center;
  padding: 22px;
  border-radius: 12px;
  background: ${(props) => props.color};
`;

export const ImgUp = styled.ImageBackground`
  width: 100%;

  height: 50%;
  justify-content: center;
  align-items: center;
`;

export const Blur = styled.View`
  width: 100%;
  opacity: 0.4;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  position: absolute;
`;

export const StepTitle = styled.Text`
  font-size: 22px;
  color: #fff;
`;
