import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { Text } from './text';
import {
  BorderSizeConfig,
  ColorConfig,
  MarginSizeConfig,
  TextSizeConfig,
} from '../../configs';
import { FontFamily } from '../constants';
import { rem } from '../helpers';

interface IProps {
  style?: StyleProp<ViewStyle>;
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
