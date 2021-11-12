import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import isBase64 from 'is-base64';

import {
  BorderSizeConfig,
  MarginSizeConfig,
  ShadowSizeConfig,
  PictureSizeConfig,
  ColorConfig,
  TextSizeConfig,
} from '../../../configs';
import { ISearchResultItemDto } from '../../dtos';
import { ViewStyle } from '../../types';
import { Text } from '../../components';
import { FontFamily } from '../../constants';

interface IProps {
  style?: ViewStyle;
  data?: ISearchResultItemDto;
}

export function CardItem({ data, style }: IProps) {
  if (!data) return null;

  const { lowestPrice, name, description, distance, picture, rating } = data;
  const validPicture = isBase64(picture);

  return (
    <View style={[style, styles.container]}>
      <View style={styles.pictureContainer}>
        {validPicture ? (
          <Image
            style={styles.pictureContainer}
            source={{ uri: `data:image/jpeg;base64,${picture}` }}
          />
        ) : (
          <Image
            style={styles.pictureContainer}
            source={require('../../../assets/images/no-picture.png')}
          />
        )}

        <View style={styles.priceContainer}>
          <Text
            fontColor={ColorConfig.gray5}
            fontSize={TextSizeConfig.tiny}
            fontFamily={FontFamily.robotoLight}
          >
            A partir de{' '}
          </Text>
          <Text
            fontFamily={FontFamily.robotoMedium}
            fontSize={TextSizeConfig.small}
          >
            {' '}
            R$ {lowestPrice.toFixed(2).replace('.', ',')}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text
          fontSize={TextSizeConfig.small}
          fontFamily={FontFamily.robotoMedium}
        >
          {name}
        </Text>
        <Text
          fontSize={TextSizeConfig.tiny}
          fontFamily={FontFamily.robotoLight}
          fontColor={ColorConfig.gray5}
          numberOfLines={3}
        >
          {description}
        </Text>
        <View style={styles.distanceAndRatingContainer}>
          <Text>distance</Text>
          <Text>rating</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: PictureSizeConfig.size,
    borderRadius: BorderSizeConfig.bigRadius,
    elevation: ShadowSizeConfig.smallElevation,
    backgroundColor: ColorConfig.white1,
    margin: MarginSizeConfig.small,
  },
  pictureContainer: {
    height: PictureSizeConfig.size,
    borderTopLeftRadius: BorderSizeConfig.bigRadius,
    borderTopRightRadius: BorderSizeConfig.bigRadius,
  },
  priceContainer: {
    position: 'absolute',
    right: MarginSizeConfig.tiny,
    bottom: MarginSizeConfig.tiny,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: MarginSizeConfig.tiny / 2,
    paddingHorizontal: MarginSizeConfig.tiny,
    backgroundColor: ColorConfig.white1,
    borderRadius: BorderSizeConfig.smallRadius,
  },
  infoContainer: {
    paddingHorizontal: MarginSizeConfig.small,
    paddingVertical: MarginSizeConfig.tiny,
  },
  distanceAndRatingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});
