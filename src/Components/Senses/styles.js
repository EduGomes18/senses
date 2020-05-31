import styled from "styled-components/native";
import Constants from "expo-constants";
import { Primary, Red } from "../../Config";

export const Container = styled.View`
  flex: 1;
  padding-top: ${(props) =>
    props.full ? 0 : Constants.statusBarHeight + "px"};
  justify-content: space-around;
  align-items: center;
`;
export const BackButton = styled.TouchableOpacity`
  width: ${(props) => (props.full ? 0 : "100%")};
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 22px;
`;

export const Back = styled.Text`
  margin-left: 12px;
  font-size: 16px;
  font-family: Montserrat Bold;
  color: ${Primary};
`;

export const VideoArea = styled.View`
width:100%;
justify-content:center;
align-items:center;
position:${(props) => (props.full ? "absolute" : "relative")}
top:0;
left:0;
height:${(props) => (props.full ? "100%" : "50%")}
`;
