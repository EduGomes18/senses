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
  border-top-left-radius:32px;
  flex-direction:row;
  background:${(props) => props.color}
  justify-content:center;
  align-items:center;
  height: 10%;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  font-family: Montserrat Regular;
  color: #fff;
`;

export const CardInner = styled.View`
  width: 50%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const CardImage = styled.ImageBackground`
  width: 50%;
  height: 100%;
`;

export const BackButton = styled.TouchableOpacity`
  width: 100%;
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

export const RecordTitle = styled.Text`
  font-size: 20px;
  width: 80%;
  text-align: center;
  font-family: Montserrat SemiBold;
  color: ${Primary};
`;
