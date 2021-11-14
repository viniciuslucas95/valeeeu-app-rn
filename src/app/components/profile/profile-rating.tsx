import React, { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { StarIcon } from '../../../assets/svgs';
import {
  ColorConfig,
  IconSizeConfig,
  MarginSizeConfig,
  TextSizeConfig,
} from '../../../configs';
import { FontFamily } from '../../constants';
import { rem } from '../../helpers';
import { Text } from '../text';

interface IProps {
  style?: StyleProp<ViewStyle>;
  total?: number;
  children: number;
}

function formatAverage(rating: number) {
  return rating.toFixed(1).replace('.', ',');
}

function formatTotal(total: number) {
  return total.toFixed(0);
}

export function ProfileRating({
  children,
  total,
  style,
}: PropsWithChildren<IProps>) {
  return (
    <View style={[styles.container, style]}>
      <StarIcon color={ColorConfig.yellow1} height={rem(IconSizeConfig.tiny)} />
      <Text
        style={{ marginLeft: MarginSizeConfig.tiny }}
        fontSize={TextSizeConfig.small}
        fontColor={ColorConfig.yellow1}
        fontFamily={FontFamily.robotoMedium}
      >
        {formatAverage(children)}
      </Text>
      {total ? (
        <Text
          fontSize={TextSizeConfig.tiny}
          fontColor={ColorConfig.gray5}
          fontFamily={FontFamily.robotoLight}
        >
          {` (${formatTotal(total)})`}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
