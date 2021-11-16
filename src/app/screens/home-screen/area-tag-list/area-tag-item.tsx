import React, { PropsWithChildren } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';

import {
  ColorConfig,
  ElementSizeConfig,
  MarginSizeConfig,
} from '../../../../configs';
import { IconToggle, Text } from '../../../components';
import { FontFamily } from '../../../constants';
import { rem } from '../../../helpers';

interface IProps {
  style?: StyleProp<ViewStyle>;
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
          fontColor={isToggled ? ColorConfig.blue2 : ColorConfig.gray6}
          textAlign='center'
        >
          {firstLine}
        </Text>
        {secondLine ? (
          <Text
            fontFamily={
              isToggled ? FontFamily.robotoRegular : FontFamily.robotoLight
            }
            fontColor={isToggled ? ColorConfig.blue2 : ColorConfig.gray6}
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
