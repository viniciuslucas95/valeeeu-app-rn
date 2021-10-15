import styled from 'styled-components/native';
import { ColorConstant, SizeConstant } from '../../../configs/constants';

interface IProps {
  size?: string;
  color?: string;
  font?: string;
}

export const Text = styled.Text<IProps>`
  color: ${({ color }) => color ?? ColorConstant.black};
  font-size: ${({ size }) => size ?? SizeConstant.fontSize16};
  font-family: ${({ font }) => font ?? 'Roboto'};
`;
