import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator as ActivityIndicatorNative,
} from 'react-native';
import {
  ColorConfig,
  ElementSizeConfig,
  MarginSizeConfig,
} from '../../configs';

interface IProps {
  horizontal?: boolean;
}

export function ActivityIndicator({ horizontal }: IProps) {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: horizontal ? 'row' : 'column',
          marginLeft: horizontal ? MarginSizeConfig.big : 0,
          marginTop: horizontal ? 0 : MarginSizeConfig.big,
          marginBottom: horizontal ? 0 : MarginSizeConfig.big * 2.5,
        },
      ]}
    >
      <ActivityIndicatorNative
        size={ElementSizeConfig.minPressableArea}
        color={ColorConfig.blue2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
