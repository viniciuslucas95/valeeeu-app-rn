import styled from 'styled-components/native';
import { UnitHandler } from '../../../helpers';
import { IHighlightColors } from './interfaces';

const unitHandler = new UnitHandler();

interface IHighlight {
  isHighlighted: boolean;
  colors: IHighlightColors;
}

export const WrapperContainer = styled.View`
  flex-direction: row;
  max-width: ${unitHandler.vwPx(90)};
`;

export const TouchableContainer = styled.TouchableWithoutFeedback``;

export const Container = styled.View<IHighlight>`
  background-color: ${({
    colors: { highlightColor, normalColor },
    isHighlighted,
  }) => (isHighlighted ? highlightColor : normalColor)};
  flex: 1;
  border-width: 1px;
  border-color: transparent;
  border-radius: 4px;
`;
