import React, { createContext, PropsWithChildren, useState } from 'react';
import styled, { css } from 'styled-components/native';
import { SizeConfig } from '../../configs';
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
}

export const SizeContext = createContext<ISizeContext>({} as ISizeContext);

export function IconButton({
  onPress,
  children,
  side,
  style,
}: PropsWithChildren<IProps>) {
  const [size, setSize] = useState<IIconSize>({
    height: 0,
    width: 0,
  });

  return (
    <SizeContext.Provider value={{ setSize: side ? setSize : undefined }}>
      <TouchableContainer onPress={onPress} style={style}>
        <IconContainer buttonAdjust={side ? { side, size } : undefined}>
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
}

export const IconContainer = styled.View<IStyleProps>`
  justify-content: center;
  align-items: center;
  width: ${SizeConfig.buttonPressableAreaVwPx};
  height: ${SizeConfig.buttonPressableAreaVwPx};
  border-radius: ${SizeConfig.buttonPressableBorderRadiusVwPx};
  ${({ buttonAdjust }) => {
    if (!buttonAdjust) return;
    const {
      side,
      size: { width },
    } = buttonAdjust;
    if (side === 'left')
      return css`
        margin-left: -${(SizeConfig.buttonPressableAreaVw - width) / 2 + 'px'};
      `;
    if (side === 'right')
      return css`
        margin-right: -${(SizeConfig.buttonPressableAreaVw - width) / 2 + 'px'};
      `;
    return null;
  }}
`;
