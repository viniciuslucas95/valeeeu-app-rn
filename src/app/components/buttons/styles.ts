import styled from 'styled-components/native';
import { ColorConstant, SizeConstant } from '../../../configs/constants';
import { Font } from '../../dataTypes/enums';

interface IProps {
  isHighlighted: boolean;
}

interface IButtonContainer extends IProps {
  width?: string;
}

export const Container = styled.View``;

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const ButtonContainer = styled.View<IButtonContainer>`
  background-color: ${({ isHighlighted }) =>
    isHighlighted ? ColorConstant.darkPurple : ColorConstant.purple};
  height: ${SizeConstant.elementHeight};
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width ?? SizeConstant.maxElementWidth};
  border-radius: ${SizeConstant.borderRadius};
`;

export const TextInsideButtonContainer = styled.Text`
  text-transform: uppercase;
  color: white;
  font-family: ${Font.robotoMedium};
  font-size: ${SizeConstant.fontSize16};
`;

export const TextWithoutButtonContainer = styled.Text<IProps>`
  color: ${({ isHighlighted }) =>
    isHighlighted ? ColorConstant.darkPurple : ColorConstant.purple};
  font-family: ${Font.robotoMedium};
  font-size: ${SizeConstant.fontSize14};
`;
