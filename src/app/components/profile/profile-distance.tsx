import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

import { LocationIcon } from '../../../assets/svgs';
import {
  ColorConfig,
  IconSizeConfig,
  MarginSizeConfig,
  TextSizeConfig,
} from '../../../configs';
import { rem } from '../../helpers';
import { ViewStyle } from '../../types';
import { Text } from '../text';

interface IProps {
  style?: ViewStyle;
  children: number;
}

function formatDistance(distance: number) {
  return distance < 1000
    ? distance.toFixed(0) + 'm'
    : (distance / 1000).toFixed(2).replace('.', ',') + 'km';
}

export function ProfileDistance({
  children,
  style,
}: PropsWithChildren<IProps>) {
  return (
    <View style={[styles.container, style]}>
      <LocationIcon
        color={ColorConfig.gray4}
        height={rem(IconSizeConfig.tiny)}
      />
      <Text
        style={{ marginLeft: MarginSizeConfig.tiny }}
        fontSize={TextSizeConfig.tiny}
        fontColor={ColorConfig.gray5}
      >
        {formatDistance(children)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
