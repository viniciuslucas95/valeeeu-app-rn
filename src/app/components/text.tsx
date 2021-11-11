import React, { PropsWithChildren } from 'react';
import { StyleProp, Text as TextNative, TextStyle } from 'react-native';
import { ColorConfig, TextSizeConfig } from '../../configs';

import { FontFamily } from '../constants';

interface IProps {
  children: string;
  fontFamily?: string;
  fontSize?: number;
  fontColor?: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  textAlign?: 'left' | 'center' | 'right';
}

export function Text({
  children,
  fontFamily = FontFamily.robotoRegular,
  fontSize = TextSizeConfig.medium,
  fontColor = ColorConfig.black1,
  style,
  numberOfLines = 1,
  textAlign = 'left',
}: PropsWithChildren<IProps>) {
  return (
    <TextNative
      numberOfLines={numberOfLines}
      style={[
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: fontColor,
          textAlign: textAlign,
        },
        style,
      ]}
    >
      {children}
    </TextNative>
  );
}
