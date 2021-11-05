import {
  AdMobBanner,
  isAvailableAsync,
  getPermissionsAsync,
} from 'expo-ads-admob';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../configs';
import { FontFamily } from '../data-types/enums';
import { ViewElementStyle } from '../data-types/types';
import { UnitHandler } from '../helpers';
import { Text } from '../styled-components';

const androidBannerTestId = 'ca-app-pub-3940256099942544/6300978111';
const iosBannerTestId = 'ca-app-pub-3940256099942544/2934735716';

interface IProps {
  style?: ViewElementStyle;
}

export function Ad({ style }: IProps) {
  const [isAdAvaiable, setIsAdAvaiable] = useState(false);

  useEffect(() => {
    (async () => {
      await getPermissionsAsync();
      const result = await isAvailableAsync();
      setIsAdAvaiable(result);
    })();
  }, []);

  if (!isAdAvaiable) return null;

  return (
    <Container style={[{ elevation: 2.5 }, style]}>
      <Text
        style={{
          alignSelf: 'flex-start',
          marginLeft: SizeConfig.smallMargin,
          marginVertical: SizeConfig.smallMargin,
        }}
        fontSize={SizeConfig.smallText}
        fontFamily={FontFamily.medium}
      >
        Anúncio
      </Text>
      <AdMobBanner
        adUnitID={Platform.OS === 'ios' ? iosBannerTestId : androidBannerTestId}
        bannerSize='largeBanner'
        servePersonalizedAds
        onDidFailToReceiveAdWithError={() => console.error('Ad error')}
      />
    </Container>
  );
}

const Container = styled.View`
  width: 330px;
  height: ${SizeConfig.mediumMargin * 2 + 110 + UnitHandler.rem(1) + 'px'};
  align-self: center;
  align-items: center;
  border-radius: ${SizeConfig.borderRadius + 'px'};
  background-color: ${ColorConfig.white1};
`;
