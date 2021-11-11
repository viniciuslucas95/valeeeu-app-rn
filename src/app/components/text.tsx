import React, { PropsWithChildren } from 'react';
import { StyleProp, Text as TextNative, TextStyle } from 'react-native';

import { FontColor, FontFamily, FontSize } from '../constants';

interface IProps {
  children: string;
  fontFamily?: string;
  fontSize?: number;
  fontColor?: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}

export function Text({
  children,
  fontFamily = FontFamily.robotoRegular,
  fontSize = FontSize.medium,
  fontColor = FontColor.default,
  style,
  numberOfLines = 1,
}: PropsWithChildren<IProps>) {
  return (
    <TextNative
      numberOfLines={numberOfLines}
      style={[
        { fontFamily: fontFamily, fontSize: fontSize, color: fontColor },
        style,
      ]}
    >
      {children}
    </TextNative>
  );
}
