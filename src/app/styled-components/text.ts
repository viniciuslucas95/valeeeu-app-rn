import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../configs';
import { FontFamily } from '../data-types/enums';
import { TextAlign } from '../data-types/types';

interface IProps {
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  textAlign?: TextAlign;
}

export const Text = styled.Text<IProps>`
  font-family: ${({ fontFamily }) => fontFamily ?? FontFamily.regular};
  font-size: ${({ fontSize }) =>
    fontSize ? fontSize + 'px' : SizeConfig.mediumText + 'px'};
  color: ${({ color }) => color ?? ColorConfig.black1};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`;
