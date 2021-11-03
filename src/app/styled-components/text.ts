import styled from 'styled-components/native';
import { ColorConstant, SizeConstant } from '../../configs';
import { FontFamily } from '../data-types/enums';
import { TextAlign } from '../data-types/types';

interface IProps {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  textAlign?: TextAlign;
}

export const Text = styled.Text<IProps>`
  font-family: ${({ fontFamily }) => fontFamily ?? FontFamily.regular};
  font-size: ${({ fontSize }) => fontSize ?? SizeConstant.mediumText + 'px'};
  color: ${({ color }) => color ?? ColorConstant.black1};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`;
