import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { LocationIcon } from '../../../assets/svgs';
import {
  ColorConfig,
  IconSizeConfig,
  MarginSizeConfig,
  TextSizeConfig,
} from '../../../configs';
import { formatDistance, rem } from '../../helpers';
import { Text } from '../text';

interface IProps {
  style?: StyleProp<ViewStyle>;
  children: number;
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
