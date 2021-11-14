import React from 'react';
import { StyleProp, StyleSheet, TextStyle, View } from 'react-native';

import { Text } from './text';
import { ViewStyle } from '../types';
import {
  BorderSizeConfig,
  ColorConfig,
  MarginSizeConfig,
  TextSizeConfig,
} from '../../configs';
import { FontFamily } from '../constants';
import { rem } from '../helpers';

interface IProps {
  style?: ViewStyle;
  textStyle?: StyleProp<TextStyle>;
  quantity: number;
}

export function TagQuantity({ quantity, style, textStyle }: IProps) {
  return (
    <View style={[styles.container, style]}>
      <Text
        style={textStyle}
        fontFamily={FontFamily.robotoLight}
        fontSize={TextSizeConfig.tiny}
      >
        {quantity.toFixed(0)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorConfig.gray2,
    paddingHorizontal: rem(MarginSizeConfig.small * 0.8),
    paddingVertical: rem(MarginSizeConfig.tiny * 0.25),
    borderRadius: rem(BorderSizeConfig.bigRadius * 2),
  },
});
