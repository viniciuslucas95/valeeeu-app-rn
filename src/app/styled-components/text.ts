import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../configs';
import { FontFamily } from '../data-types/enums';

interface IProps {
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: TextAlign;
}

export type TextAlign = 'left' | 'center' | 'right';

export const Text = styled.Text<IProps>`
  font-family: ${({ fontFamily }) => fontFamily ?? FontFamily.regular};
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize + 'px' : SizeConfig.mediumText + 'px'};
  color: ${({ color }) => color ?? ColorConfig.black1};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`;
