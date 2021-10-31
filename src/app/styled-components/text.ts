import styled from 'styled-components/native';
import { SizeConfig, ThemeConfig } from '../../configs';
import { FontFamily } from '../data-types/enums';

interface IProps {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
}

export const Text = styled.Text<IProps>`
  font-family: ${({ fontFamily }) => fontFamily ?? FontFamily.regular};
  font-size: ${({ fontSize }) => fontSize ?? SizeConfig.defaultTextVwPx};
  color: ${({ color }) => color ?? ThemeConfig.text};
`;
