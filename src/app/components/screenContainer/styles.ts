import styled from 'styled-components/native';
import { ColorConstant, SizeConstant } from '../../../configs/constants';
import { UnitHandler } from '../../helpers';
import { IProps } from './IProps';

export const Container = styled.View<IProps>`
  flex: 1;
  align-items: center;
  justify-content: ${({ contentPosition: startingContent }) =>
    startingContent === 'top' ? 'flex-start' : 'center'};
  background-color: ${ColorConstant.white};
`;

export const InsideContainer = styled.View<IProps>`
  width: ${SizeConstant.maxElementWidth};
  margin-top: ${({ contentPosition: startingContent }) =>
    startingContent === 'top' ? UnitHandler.vhPx(3) : '0px'};
`;
