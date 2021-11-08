import React from 'react';
import { FlatList, View } from 'react-native';
import isBase64 from 'is-base64';
import { ColorConfig, SizeConfig } from '../../../configs';
import styled from 'styled-components/native';
import { Text } from '../../styled-components';
import { FontFamily } from '../../data-types/enums';
import { Distance } from '../distance';
import { Rating } from '../rating';
import { IStyleable } from '../../data-types/props';

export interface ICard {
  id: string;
  picture: string;
  lowestPrice: number;
  name: string;
  description: string;
  distance: number;
  rating: number;
  totalVotes: number;
}

export interface IHaveCards {
  cards: ICard[];
}

type IProps = IHaveCards & IStyleable;

export function HomeCardList({ cards, style }: IProps) {
  return (
    <View style={style}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={cards}
        horizontal
        renderItem={({ item, index }) => {
          const {
            description,
            distance,
            lowestPrice,
            name,
            picture,
            rating,
            totalVotes,
          } = item as ICard;
          return (
            <Card
              style={[
                index === 0
                  ? {
                      marginLeft: SizeConfig.bigMargin,
                      marginRight: SizeConfig.smallMargin,
                    }
                  : index === cards.length - 1
                  ? {
                      marginLeft: SizeConfig.smallMargin,
                      marginRight: SizeConfig.bigMargin,
                    }
                  : {
                      marginLeft: SizeConfig.smallMargin,
                      marginRight: SizeConfig.smallMargin,
                    },
                { elevation: 2.5, marginVertical: SizeConfig.smallMargin },
              ]}
            >
              <CardPictureContainer>
                {isBase64(picture) ? (
                  <Picture
                    source={{
                      uri: `data:image/jpeg;base64,${picture}`,
                    }}
                  />
                ) : null}
                <PriceContainer>
                  <Text
                    fontFamily={FontFamily.light}
                    fontSize={SizeConfig.tinyText}
                    color={ColorConfig.gray5}
                  >
                    A partir de{' '}
                    <Text
                      fontFamily={FontFamily.medium}
                      fontSize={SizeConfig.smallText}
                    >
                      R$ {lowestPrice.toFixed(2).replace('.', ',')}
                    </Text>
                  </Text>
                </PriceContainer>
              </CardPictureContainer>
              <CardInfoContainer>
                <Text fontFamily={FontFamily.medium}>{name}</Text>
                <Text
                  numberOfLines={3}
                  color={ColorConfig.gray5}
                  fontFamily={FontFamily.light}
                  fontSize={SizeConfig.smallText}
                >
                  {description}
                </Text>
                <DistanceAndRatingContainer
                  style={{ marginTop: SizeConfig.tinyMargin }}
                >
                  <Distance distance={distance} />
                  <Rating rating={rating} totalVotes={totalVotes} />
                </DistanceAndRatingContainer>
              </CardInfoContainer>
            </Card>
          );
        }}
        keyExtractor={(item) => (item as any).id}
      />
    </View>
  );
}

const Card = styled.View`
  width: ${SizeConfig.imageSize + 'px'};
  border-radius: ${SizeConfig.borderRadius + 'px'};
  background-color: ${ColorConfig.white1};
`;

const Picture = styled.Image`
  position: absolute;
  border-top-left-radius: ${SizeConfig.borderRadius + 'px'};
  border-top-right-radius: ${SizeConfig.borderRadius + 'px'};
  height: ${SizeConfig.imageSize + 'px'};
  width: ${SizeConfig.imageSize + 'px'};
`;

// prettier-ignore
const CardPictureContainer = styled.View`
  height: ${SizeConfig.imageSize + 'px'};
  border-top-left-radius: ${SizeConfig.borderRadius + 'px'};
  border-top-right-radius: ${SizeConfig.borderRadius + 'px'};
  background-color: ${ColorConfig.gray3};
`;

// prettier-ignore
const CardInfoContainer = styled.View`
    padding: ${SizeConfig.tinyMargin + 'px'} ${SizeConfig.smallMargin + 'px'};
`;

const DistanceAndRatingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const PriceContainer = styled.View`
  position: absolute;
  padding: ${SizeConfig.tinyMargin / 2 + 'px'} ${SizeConfig.tinyMargin + 'px'};
  border-radius: ${SizeConfig.borderRadius + 'px'};
  right: ${SizeConfig.tinyMargin + 'px'};
  bottom: ${SizeConfig.tinyMargin + 'px'};
  background-color: ${ColorConfig.white1};
`;
