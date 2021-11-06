import React, { createContext, PropsWithChildren, useState } from 'react';
import styled, { css } from 'styled-components/native';
import { SizeConfig } from '../../../configs';
import { IStyleable } from '../../data-types/props';
import { TouchableContainer } from '../auxiliaries';
import { IHaveWidth, IPressable } from '../interfaces';

interface IHaveSide {
  side: 'left' | 'right';
}

interface ISizeContext {
  setSize?: React.Dispatch<React.SetStateAction<IIconSize>>;
}

interface IIconSize extends IHaveWidth {
  height: number;
}

interface IHaveBackground {
  backgroundColor: string;
}

interface IProps
  extends IStyleable,
    IPressable,
    Partial<IHaveSide>,
    Partial<IHaveBackground> {
  extraPressableArea?: number;
  children: JSX.Element;
}

export const SizeContext = createContext<ISizeContext>({} as ISizeContext);

export function IconButton({
  onPress,
  children,
  side,
  style,
  extraPressableArea = 0,
  backgroundColor = 'transparent',
}: PropsWithChildren<IProps>) {
  const [size, setSize] = useState<IIconSize>({
    height: 0,
    width: 0,
  });
  return (
    <SizeContext.Provider value={{ setSize: side ? setSize : undefined }}>
      <TouchableContainer onPress={onPress} style={style}>
        <IconContainer
          backgroundColor={backgroundColor}
          extraPressableArea={extraPressableArea}
          buttonAdjust={side ? { side, size } : undefined}
        >
          {children}
        </IconContainer>
      </TouchableContainer>
    </SizeContext.Provider>
  );
}

interface IButtonAdjust extends IHaveSide {
  size: IIconSize;
}

interface IStyleProps extends IHaveBackground {
  buttonAdjust?: IButtonAdjust;
  extraPressableArea: number;
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
  background-color: ${({ backgroundColor }) => backgroundColor};
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
  }};
`;
