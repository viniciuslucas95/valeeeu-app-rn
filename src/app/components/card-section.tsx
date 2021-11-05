import React from 'react';
import styled from 'styled-components/native';
import { ColorConfig, SizeConfig } from '../../configs';
import { FontFamily } from '../data-types/enums';
import { ViewElementStyle } from '../data-types/types';
import { Text } from '../styled-components';
import { JustTextButton, pressableArea } from './buttons';
import { Rating } from './rating';
import { Distance } from './distance';
import isBase64 from 'is-base64';

interface IProps {
  title: string;
  style?: ViewElementStyle;
  cards: ICard[];
}

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

export function CardSection({ style, title, cards }: IProps) {
  return (
    <Container style={style}>
      <TitleContainer>
        <Text fontFamily={FontFamily.medium} fontSize={SizeConfig.bigText}>
          {title}
        </Text>
        <JustTextButton
          style={{ marginRight: -pressableArea }}
          onPress={() => console.log('See more button pressed...')}
        >
          Ver mais
        </JustTextButton>
      </TitleContainer>
      <FlatListWrapper>
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
            const validPicture = isBase64(picture);
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
                  {validPicture ? (
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
      </FlatListWrapper>
    </Container>
  );
}

const Container = styled.View``;

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${SizeConfig.maxElementWidth + 'px'};
  align-self: center;
`;

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

const FlatListWrapper = styled.View``;

const FlatList = styled.FlatList``;