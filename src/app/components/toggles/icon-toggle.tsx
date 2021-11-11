import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorConfig, ElementSizeConfig } from '../../../configs';

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
          backgroundColor: isToggled ? ColorConfig.blue2 : ColorConfig.gray4,
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
    height: ElementSizeConfig.minHeight,
    width: ElementSizeConfig.minHeight,
    borderRadius: ElementSizeConfig.minHeight / 2,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2.5,
  },
});
