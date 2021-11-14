import React, { memo } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
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
import { ProfileDistance, ProfileRating, Text } from '../../../components';
import { FontFamily } from '../../../constants';
import { IFilterDto, IOrderByDto, ISmallProfileDto } from '../../../dtos';
import { useProfileApi } from '../../../hooks';
import { rem } from '../../../helpers';

interface IProps {
  style?: StyleProp<ViewStyle>;
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

  // if (!result || !tag)
  //   return (
  //     <TouchableWithoutFeedback onPress={() => null}>
  //       <View style={[style, styles.container]}>
  //         <View style={styles.pictureContainer}>
  //           <View style={styles.pictureContainer}>
  //             <View
  //               style={{
  //                 position: 'absolute',
  //                 right: MarginSizeConfig.small,
  //                 bottom: MarginSizeConfig.small,
  //                 width: PictureSizeConfig.size * 0.7,
  //                 height: TextSizeConfig.medium - MarginSizeConfig.tiny,
  //                 backgroundColor: ColorConfig.gray2,
  //                 borderRadius: BorderSizeConfig.smallRadius / 2,
  //               }}
  //             />
  //           </View>
  //         </View>
  //         <View
  //           style={[
  //             styles.infoContainer,
  //             {
  //               backgroundColor: ColorConfig.gray2,
  //               justifyContent: 'space-between',
  //               flex: 1,
  //               borderBottomLeftRadius: BorderSizeConfig.bigRadius,
  //               borderBottomRightRadius: BorderSizeConfig.bigRadius,
  //             },
  //           ]}
  //         >
  //           <View
  //             style={{
  //               width: '60%',
  //               height: TextSizeConfig.medium - MarginSizeConfig.tiny,
  //               marginVertical: MarginSizeConfig.tiny / 2,
  //               backgroundColor: ColorConfig.gray1,
  //               borderRadius: BorderSizeConfig.smallRadius / 2,
  //             }}
  //           />
  //           <View
  //             style={{
  //               width: '100%',
  //               height: TextSizeConfig.small - MarginSizeConfig.tiny,
  //               marginVertical: MarginSizeConfig.tiny / 2,
  //               backgroundColor: ColorConfig.gray1,
  //               borderRadius: BorderSizeConfig.smallRadius / 2,
  //             }}
  //           />
  //           <View
  //             style={{
  //               width: '100%',
  //               height: TextSizeConfig.small - MarginSizeConfig.tiny,
  //               marginVertical: MarginSizeConfig.tiny / 2,
  //               backgroundColor: ColorConfig.gray1,
  //               borderRadius: BorderSizeConfig.smallRadius / 2,
  //             }}
  //           />
  //           <View
  //             style={{
  //               width: '100%',
  //               height: TextSizeConfig.small - MarginSizeConfig.tiny,
  //               marginVertical: MarginSizeConfig.tiny / 2,
  //               backgroundColor: ColorConfig.gray1,
  //               borderRadius: BorderSizeConfig.smallRadius / 2,
  //             }}
  //           />

  //           <View style={styles.distanceAndRatingContainer}>
  //             <View
  //               style={{
  //                 width: '20%',
  //                 height: TextSizeConfig.small - MarginSizeConfig.tiny,
  //                 backgroundColor: ColorConfig.gray1,
  //                 borderRadius: BorderSizeConfig.smallRadius / 2,
  //               }}
  //             />
  //             <View
  //               style={{
  //                 width: '30%',
  //                 height: TextSizeConfig.small - MarginSizeConfig.tiny,
  //                 backgroundColor: ColorConfig.gray1,
  //                 borderRadius: BorderSizeConfig.smallRadius / 2,
  //               }}
  //             />
  //           </View>
  //         </View>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   );

  return (
    <TouchableWithoutFeedback
      onPress={result ? () => openProfile(result) : () => null}
    >
      <View style={[style, styles.container]}>
        <View style={styles.pictureContainer}>
          {result ? (
            <>
              {isBase64(result.picture) ? (
                <Image
                  style={styles.pictureContainer}
                  source={{ uri: `data:image/jpeg;base64,${result.picture}` }}
                />
              ) : (
                <Image style={styles.pictureContainer} source={noPicture} />
              )}
            </>
          ) : null}
          <View
            style={[
              styles.priceContainer,
              {
                backgroundColor: result
                  ? ColorConfig.white1
                  : ColorConfig.gray1,
              },
            ]}
          >
            <Text
              fontColor={result ? ColorConfig.gray5 : ColorConfig.gray1}
              fontSize={TextSizeConfig.tiny}
              fontFamily={FontFamily.robotoLight}
            >
              A partir de{' '}
            </Text>
            <Text
              fontFamily={FontFamily.robotoMedium}
              fontSize={TextSizeConfig.small}
              fontColor={result ? ColorConfig.black1 : ColorConfig.gray1}
            >
              R${' '}
              {result
                ? result.lowestPrice.toFixed(2).replace('.', ',')
                : '99,90'}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.infoContainer,
            {
              backgroundColor: result ? ColorConfig.white1 : ColorConfig.gray1,
            },
          ]}
        >
          {result ? (
            <>
              <Text
                fontSize={TextSizeConfig.small}
                fontFamily={FontFamily.robotoMedium}
              >
                {result.name}
              </Text>
              <Text
                fontSize={TextSizeConfig.small}
                fontFamily={FontFamily.robotoLight}
                fontColor={ColorConfig.gray5}
                numberOfLines={3}
              >
                {result.description}
              </Text>
              <View style={styles.distanceAndRatingContainer}>
                <ProfileDistance>{result.distance}</ProfileDistance>
                <ProfileRating total={result.rating.total}>
                  {result.rating.average}
                </ProfileRating>
              </View>
            </>
          ) : (
            <>
              <View
                style={{
                  backgroundColor: ColorConfig.gray2,
                  width: '60%',
                  height: rem(TextSizeConfig.small),
                  borderRadius: rem(BorderSizeConfig.smallRadius),
                  marginBottom: rem(MarginSizeConfig.small),
                  marginTop: rem(MarginSizeConfig.tiny),
                }}
              />
              <View
                style={{
                  backgroundColor: ColorConfig.gray2,
                  width: '100%',
                  height: rem(TextSizeConfig.tiny),
                  borderRadius: rem(BorderSizeConfig.smallRadius),
                  marginBottom: rem(MarginSizeConfig.tiny),
                }}
              />
              <View
                style={{
                  backgroundColor: ColorConfig.gray2,
                  width: '100%',
                  height: rem(TextSizeConfig.tiny),
                  borderRadius: rem(BorderSizeConfig.smallRadius),
                  marginBottom: rem(MarginSizeConfig.tiny),
                }}
              />
              <View
                style={{
                  backgroundColor: ColorConfig.gray2,
                  width: '100%',
                  height: rem(TextSizeConfig.tiny),
                  borderRadius: rem(BorderSizeConfig.smallRadius),
                  marginBottom: rem(MarginSizeConfig.tiny),
                }}
              />
              <View style={styles.distanceAndRatingContainer}>
                <View
                  style={{
                    backgroundColor: ColorConfig.gray2,
                    width: '30%',
                    height: rem(TextSizeConfig.tiny),
                    borderRadius: rem(BorderSizeConfig.smallRadius),
                    marginBottom: rem(MarginSizeConfig.tiny),
                  }}
                />
                <View
                  style={{
                    backgroundColor: ColorConfig.gray2,
                    width: '45%',
                    height: rem(TextSizeConfig.tiny),
                    borderRadius: rem(BorderSizeConfig.smallRadius),
                    marginBottom: rem(MarginSizeConfig.tiny),
                  }}
                />
              </View>
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const CardItem = memo(CardItemComponent);

const styles = StyleSheet.create({
  container: {
    width: rem(PictureSizeConfig.size),
    borderRadius: BorderSizeConfig.bigRadius,
    elevation: ShadowSizeConfig.smallElevation,
    backgroundColor: ColorConfig.white1,
    marginVertical: rem(MarginSizeConfig.tiny),
  },
  pictureContainer: {
    height: rem(PictureSizeConfig.size),
    borderTopLeftRadius: BorderSizeConfig.bigRadius,
    borderTopRightRadius: BorderSizeConfig.bigRadius,
    backgroundColor: ColorConfig.gray2,
  },
  priceContainer: {
    position: 'absolute',
    right: rem(MarginSizeConfig.tiny * 1.5),
    bottom: rem(MarginSizeConfig.tiny * 1.5),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: rem(MarginSizeConfig.tiny / 2),
    paddingHorizontal: rem(MarginSizeConfig.tiny),
    borderRadius: rem(BorderSizeConfig.smallRadius),
  },
  infoContainer: {
    paddingHorizontal: rem(MarginSizeConfig.small),
    paddingVertical: rem(MarginSizeConfig.tiny),
    height: rem(PictureSizeConfig.size * 0.675),
    borderBottomLeftRadius: BorderSizeConfig.bigRadius,
    borderBottomRightRadius: BorderSizeConfig.bigRadius,
  },
  distanceAndRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: rem(MarginSizeConfig.tiny),
  },
});
