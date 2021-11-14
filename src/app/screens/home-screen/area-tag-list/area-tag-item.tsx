import React, { PropsWithChildren } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import {
  ColorConfig,
  ElementSizeConfig,
  MarginSizeConfig,
} from '../../../../configs';
import { IconToggle, Text } from '../../../components';
import { FontFamily } from '../../../constants';
import { rem } from '../../../helpers';
import { ViewStyle } from '../../../types';

interface IProps {
  style?: ViewStyle;
  onPress(): void;
  icon: JSX.Element;
  firstLine: string;
  secondLine?: string;
  isToggled?: boolean;
}

export function AreaTagItem({
  style,
  onPress,
  icon,
  firstLine,
  secondLine,
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
          textAlign='center'
        >
          {firstLine}
        </Text>
        {secondLine ? (
          <Text
            fontFamily={
              isToggled ? FontFamily.robotoRegular : FontFamily.robotoLight
            }
            fontColor={isToggled ? ColorConfig.blue2 : ColorConfig.gray5}
            textAlign='center'
          >
            {secondLine}
          </Text>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width:
      ElementSizeConfig.minPressableArea + rem(MarginSizeConfig.medium * 3),
  },
  icon: {
    marginBottom: MarginSizeConfig.small,
  },
});
