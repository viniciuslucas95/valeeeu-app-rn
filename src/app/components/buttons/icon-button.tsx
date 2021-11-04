import React, { createContext, PropsWithChildren, useState } from 'react';
import styled, { css } from 'styled-components/native';
import { SizeConfig } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { TouchableContainer } from '../auxiliaries';

type Side = 'left' | 'right';

interface ISizeContext {
  setSize?: React.Dispatch<React.SetStateAction<IIconSize>>;
}

interface IIconSize {
  width: number;
  height: number;
}

export interface IHaveBackground {
  backgroundColor: string;
  elevation?: number;
}

interface IProps {
  onPress(): void;
  side?: Side;
  children: JSX.Element;
  style?: ViewElementStyle;
  extraPressableArea?: number;
  background?: IHaveBackground;
}

export const SizeContext = createContext<ISizeContext>({} as ISizeContext);

export function IconButton({
  onPress,
  children,
  side,
  style,
  extraPressableArea = 0,
  background,
}: PropsWithChildren<IProps>) {
  const [size, setSize] = useState<IIconSize>({
    height: 0,
    width: 0,
  });
  return (
    <SizeContext.Provider value={{ setSize: side ? setSize : undefined }}>
      <TouchableContainer onPress={onPress} style={style}>
        <IconContainer
          style={{ elevation: background?.elevation }}
          backgroundColor={background?.backgroundColor}
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
  backgroundColor?: string;
}

const IconContainer = styled.View<IStyleProps>`
  justify-content: center;
  align-items: center;
  width: ${({ extraPressableArea }) =>
    SizeConfig.buttonPressableArea + extraPressableArea + 'px'};
  height: ${({ extraPressableArea }) =>
    SizeConfig.buttonPressableArea + extraPressableArea + 'px'};
  border-radius: ${({ extraPressableArea }) =>
    SizeConfig.buttonPressableArea / 2 + extraPressableArea / 2 + 'px'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? 'transparent'};
  ${({ buttonAdjust }) => {
    if (!buttonAdjust) return;
    const {
      side,
      size: { width },
    } = buttonAdjust;
    if (side === 'left')
      return css`
        margin-left: -${(SizeConfig.buttonPressableArea - width) / 2 + 'px'};
      `;
    if (side === 'right')
      return css`
        margin-right: -${(SizeConfig.buttonPressableArea - width) / 2 + 'px'};
      `;
    return null;
  }}
`;
