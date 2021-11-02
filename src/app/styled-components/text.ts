import styled from 'styled-components/native';
import { ThemeConfig } from '../../configs';
import { SizeConstant } from '../../configs/constants';
import { FontFamily } from '../data-types/enums';

interface IProps {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
}

export const Text = styled.Text<IProps>`
  font-family: ${({ fontFamily }) => fontFamily ?? FontFamily.regular};
  font-size: ${({ fontSize }) => fontSize ?? SizeConstant.mediumText + 'px'};
  color: ${({ color }) => color ?? ThemeConfig.text};
`;
