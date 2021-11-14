import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import isBase64 from 'is-base64';

import {
  BorderSizeConfig,
  MarginSizeConfig,
  ShadowSizeConfig,
  PictureSizeConfig,
  ColorConfig,
  TextSizeConfig,
} from '../../../../configs';
import { ViewStyle } from '../../../types';
import { ProfileDistance, ProfileRating, Text } from '../../../components';
import { FontFamily } from '../../../constants';
import {
  IFilterDto,
  IOrderByDto,
  ISmallProfileDto,
  ITagDto,
} from '../../../dtos';
import { useProfileApi } from '../../../hooks';

interface IProps {
  style?: ViewStyle;
  index: number;
  tag?: string;
  openProfile(profile: ISmallProfileDto): void;
  orderBy?: IOrderByDto;
  filter?: IFilterDto;
}

const noPicture = require('../../../../assets/images/no-picture.png');

const CardItemComponent = ({
  index,
  style,
  openProfile,
  filter,
  orderBy,
  tag,
}: IProps) => {
  const { result, error } = useProfileApi({
    index,
    filter,
    orderBy,
    tag,
  });

  if (!result || !tag)
    return (
      <TouchableWithoutFeedback onPress={() => null}>
        <View style={[style, styles.container]}>
          <View style={styles.pictureContainer}>
            <View style={styles.pictureContainer}>
              <View
                style={{
                  position: 'absolute',
                  right: MarginSizeConfig.small,
                  bottom: MarginSizeConfig.small,
                  width: PictureSizeConfig.size * 0.7,
                  height: TextSizeConfig.medium - MarginSizeConfig.tiny,
                  backgroundColor: ColorConfig.gray2,
                  borderRadius: BorderSizeConfig.smallRadius / 2,
                }}
              />
            </View>
          </View>
          <View
            style={[
              styles.infoContainer,
              {
                backgroundColor: ColorConfig.gray2,
                justifyContent: 'space-between',
                flex: 1,
                borderBottomLeftRadius: BorderSizeConfig.bigRadius,
                borderBottomRightRadius: BorderSizeConfig.bigRadius,
              },
            ]}
          >
            <View
              style={{
                width: '60%',
                height: TextSizeConfig.medium - MarginSizeConfig.tiny,
                marginVertical: MarginSizeConfig.tiny / 2,
                backgroundColor: ColorConfig.gray1,
                borderRadius: BorderSizeConfig.smallRadius / 2,
              }}
            />
            <View
              style={{
                width: '100%',
                height: TextSizeConfig.small - MarginSizeConfig.tiny,
                marginVertical: MarginSizeConfig.tiny / 2,
                backgroundColor: ColorConfig.gray1,
                borderRadius: BorderSizeConfig.smallRadius / 2,
              }}
            />
            <View
              style={{
                width: '100%',
                height: TextSizeConfig.small - MarginSizeConfig.tiny,
                marginVertical: MarginSizeConfig.tiny / 2,
                backgroundColor: ColorConfig.gray1,
                borderRadius: BorderSizeConfig.smallRadius / 2,
              }}
            />
            <View
              style={{
                width: '100%',
                height: TextSizeConfig.small - MarginSizeConfig.tiny,
                marginVertical: MarginSizeConfig.tiny / 2,
                backgroundColor: ColorConfig.gray1,
                borderRadius: BorderSizeConfig.smallRadius / 2,
              }}
            />

            <View style={styles.distanceAndRatingContainer}>
              <View
                style={{
                  width: '20%',
                  height: TextSizeConfig.small - MarginSizeConfig.tiny,
                  backgroundColor: ColorConfig.gray1,
                  borderRadius: BorderSizeConfig.smallRadius / 2,
                }}
              />
              <View
                style={{
                  width: '30%',
                  height: TextSizeConfig.small - MarginSizeConfig.tiny,
                  backgroundColor: ColorConfig.gray1,
                  borderRadius: BorderSizeConfig.smallRadius / 2,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );

  const { picture, name, description, distance, rating, lowestPrice } = result;

  return (
    <TouchableWithoutFeedback onPress={() => openProfile(result)}>
      <View style={[style, styles.container]}>
        <View style={styles.pictureContainer}>
          {isBase64(picture) ? (
            <Image
              style={styles.pictureContainer}
              source={{ uri: `data:image/jpeg;base64,${picture}` }}
            />
          ) : (
            <Image style={styles.pictureContainer} source={noPicture} />
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
            <ProfileDistance>{distance}</ProfileDistance>
            <ProfileRating total={rating.total}>{rating.average}</ProfileRating>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const CardItem = memo(CardItemComponent);

const styles = StyleSheet.create({
  container: {
    width: PictureSizeConfig.size,
    borderRadius: BorderSizeConfig.bigRadius,
    elevation: ShadowSizeConfig.smallElevation,
    backgroundColor: ColorConfig.white1,
    marginVertical: MarginSizeConfig.tiny,
  },
  pictureContainer: {
    height: PictureSizeConfig.size,
    borderTopLeftRadius: BorderSizeConfig.bigRadius,
    borderTopRightRadius: BorderSizeConfig.bigRadius,
    backgroundColor: ColorConfig.gray3,
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
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: MarginSizeConfig.tiny,
  },
});
