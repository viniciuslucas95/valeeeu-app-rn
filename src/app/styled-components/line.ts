import styled from 'styled-components/native';
import { SizeConfig, ColorConfig } from '../../configs';

interface IProps {
  color?: string;
  flex?: number;
}

export const Line = styled.View<IProps>`
  height: ${SizeConfig.thinBorderWidth + 'px'};
  flex: ${({ flex }) => flex ?? 1};
  background-color: ${({ color }) => color ?? ColorConfig.gray3};
`;
