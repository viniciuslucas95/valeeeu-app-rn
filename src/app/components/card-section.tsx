import React from 'react';
import styled from 'styled-components/native';
import { SizeConfig } from '../../configs';
import { FontFamily } from '../data-types/enums';
import { Text } from '../styled-components';
import { JustTextButton, pressableArea } from './buttons';
import { View } from 'react-native';
import { StyleableWithCards, HomeCardList } from './lists/home-card-list';

interface IProps extends StyleableWithCards {
  title: string;
}

export function CardSection({ style, title, cards }: IProps) {
  return (
    <View style={style}>
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
      <HomeCardList cards={cards} />
    </View>
  );
}

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${SizeConfig.maxElementWidth + 'px'};
  align-self: center;
`;
