import styled from 'styled-components/native';
import { ColorConstant, SizeConstant } from '../../../configs/constants';
import { UnitHandler } from '../../helpers';
import { IProps } from './IProps';

export const Container = styled.View`
  flex: 1;
  background-color: ${ColorConstant.white};
`;

export const InsideContainer = styled.View<IProps>`
  width: ${SizeConstant.maxElementWidth};
  margin-top: ${UnitHandler.vhPx(3)};
  margin-bottom: ${UnitHandler.vhPx(3)};
  margin-left: ${UnitHandler.vwPx(5)};
  flex: 1;
  justify-content: ${({ contentPosition }) =>
    contentPosition === 'top' ? 'flex-start' : 'center'};
`;
