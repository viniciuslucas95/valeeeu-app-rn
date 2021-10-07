import styled from 'styled-components/native';
import { UnitHandler } from '../../../helpers';

const unitHandler = new UnitHandler();

export const Text = styled.Text`
  text-transform: uppercase;
  color: white;
  padding: ${unitHandler.vwPx(2)} ${unitHandler.vhPx(1)};
  text-align: center;
`;
