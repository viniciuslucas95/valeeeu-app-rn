import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  ColorConfig,
  ElementSizeConfig,
  ShadowSizeConfig,
} from '../../../configs';

import { ViewStyle } from '../../types';

interface IProps {
  children: JSX.Element;
  style?: ViewStyle;
  isToggled?: boolean;
}

export function IconToggle({
  children,
  style,
  isToggled = false,
}: PropsWithChildren<IProps>) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isToggled ? ColorConfig.blue2 : ColorConfig.gray3,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: ElementSizeConfig.minPressableArea,
    width: ElementSizeConfig.minPressableArea,
    borderRadius: ElementSizeConfig.minPressableArea / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: ShadowSizeConfig.smallElevation,
  },
});
