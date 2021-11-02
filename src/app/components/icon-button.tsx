import React, { createContext, PropsWithChildren, useState } from 'react';
import styled, { css } from 'styled-components/native';
import { SizeConstant } from '../../configs/constants';
import { ViewElementStyle } from '../data-types/types';
import { TouchableContainer } from './touchable-container';

type Side = 'left' | 'right';

interface ISizeContext {
  setSize?: React.Dispatch<React.SetStateAction<IIconSize>>;
}

interface IIconSize {
  width: number;
  height: number;
}

interface IProps {
  onPress(): void;
  side?: Side;
  children: JSX.Element;
  style?: ViewElementStyle;
  extraPressableArea?: number;
}

export const SizeContext = createContext<ISizeContext>({} as ISizeContext);

export function IconButton({
  onPress,
  children,
  side,
  style,
  extraPressableArea = 0,
}: PropsWithChildren<IProps>) {
  const [size, setSize] = useState<IIconSize>({
    height: 0,
    width: 0,
  });

  return (
    <SizeContext.Provider value={{ setSize: side ? setSize : undefined }}>
      <TouchableContainer onPress={onPress} style={style}>
        <IconContainer
          extraPressableArea={extraPressableArea}
          buttonAdjust={side ? { side, size } : undefined}
        >
          {children}
        </IconContainer>
      </TouchableContainer>
    </SizeContext.Provider>
  );
}

interface IButtonAdjust {
  side: Side;
  size: IIconSize;
}

interface IStyleProps {
  buttonAdjust?: IButtonAdjust;
  extraPressableArea: number;
}

const IconContainer = styled.View<IStyleProps>`
  justify-content: center;
  align-items: center;
  width: ${({ extraPressableArea }) =>
    SizeConstant.buttonPressableArea + extraPressableArea + 'px'};
  height: ${({ extraPressableArea }) =>
    SizeConstant.buttonPressableArea + extraPressableArea + 'px'};
  border-radius: ${({ extraPressableArea }) =>
    SizeConstant.buttonPressableArea / 2 + extraPressableArea / 2 + 'px'};
  ${({ buttonAdjust }) => {
    if (!buttonAdjust) return;
    const {
      side,
      size: { width },
    } = buttonAdjust;
    if (side === 'left')
      return css`
        margin-left: -${(SizeConstant.buttonPressableArea - width) / 2 + 'px'};
      `;
    if (side === 'right')
      return css`
        margin-right: -${(SizeConstant.buttonPressableArea - width) / 2 + 'px'};
      `;
    return null;
  }}
`;
