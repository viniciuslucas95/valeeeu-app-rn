import React, { PropsWithChildren } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import {
  ColorConfig,
  ElementSizeConfig,
  MarginSizeConfig,
} from '../../../configs';
import { IconToggle, Text } from '../../components';
import { FontFamily } from '../../constants';
import { ViewStyle } from '../../types';

interface IProps {
  style?: ViewStyle;
  onPress(): void;
  icon: JSX.Element;
  label: string;
  isToggled?: boolean;
}

export function AreaTagToggle({
  style,
  onPress,
  icon,
  label,
  isToggled = false,
}: PropsWithChildren<IProps>) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <IconToggle style={styles.icon} isToggled={isToggled}>
          {icon}
        </IconToggle>
        <Text
          fontFamily={
            isToggled ? FontFamily.robotoRegular : FontFamily.robotoLight
          }
          fontColor={isToggled ? ColorConfig.blue2 : ColorConfig.gray5}
          numberOfLines={2}
          textAlign='center'
        >
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: ElementSizeConfig.minPressableArea + MarginSizeConfig.medium * 2,
  },
  icon: {
    marginBottom: MarginSizeConfig.small,
  },
});
