import { AdMobBanner } from 'expo-ads-admob';
import React from 'react';
import { Platform, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import {
  BorderSizeConfig,
  ColorConfig,
  ShadowSizeConfig,
  TextSizeConfig,
} from '../../configs';
import { FontFamily } from '../constants';
import { rem } from '../helpers';
import { Text } from './text';

const androidBannerTestId = 'ca-app-pub-3940256099942544/6300978111';
const iosBannerTestId = 'ca-app-pub-3940256099942544/2934735716';

interface IProps {
  style?: StyleProp<ViewStyle>;
}

export function Ad({ style }: IProps) {
  return (
    <View style={[styles.container, style]}>
      <Text
        style={styles.text}
        fontSize={TextSizeConfig.small}
        fontFamily={FontFamily.robotoMedium}
      >
        Anúncio
      </Text>
      <AdMobBanner
        style={styles.ad}
        adUnitID={Platform.OS === 'ios' ? iosBannerTestId : androidBannerTestId}
        bannerSize='largeBanner'
        servePersonalizedAds
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    width: 330,
    height: 110 + rem(TextSizeConfig.small * 1.75),
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: BorderSizeConfig.smallRadius,
    backgroundColor: ColorConfig.white1,
    elevation: ShadowSizeConfig.elevation,
    shadowOffset: {
      width: ShadowSizeConfig.offsetX,
      height: ShadowSizeConfig.offsetY,
    },
    shadowRadius: ShadowSizeConfig.radius,
    shadowColor: ColorConfig.black1,
    shadowOpacity: ShadowSizeConfig.opacity,
  },
  text: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: rem(2.5),
  },
  ad: {
    marginBottom: 5,
  },
});
