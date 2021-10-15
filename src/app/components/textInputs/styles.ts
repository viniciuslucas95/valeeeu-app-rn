import styled from 'styled-components/native';
import { ColorConstant, SizeConstant } from '../../../configs/constants';
import { UnitHandler } from '../../helpers';

interface IContainerProps {
  width?: string;
  height?: string;
}

export const Container = styled.View<IContainerProps>`
  width: ${({ width }) => width ?? SizeConstant.maxElementWidth};
  height: ${({ height }) => height ?? SizeConstant.elementHeight};
  background-color: ${ColorConstant.lightGray};
  border-radius: ${SizeConstant.borderRadius};
  flex-direction: row;
  align-items: ${({ height }) =>
    height !== SizeConstant.elementHeight ? 'flex-start' : 'center'};
`;

// prettier-ignore
export const TextInput = styled.TextInput`
  color: ${ColorConstant.black};
  padding: ${SizeConstant.textInputVerticalPadding} ${SizeConstant.textInputHorizontalPadding};
  font-size: ${SizeConstant.fontSize18};
  flex: 1;
`;

export const TouchableIcon = styled.TouchableWithoutFeedback``;

export const TouchableContainer = styled.View`
  margin-right: ${UnitHandler.vwPx(2)};
  align-self: center;
`;
