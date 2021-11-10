import React, { useContext } from 'react';
import { ProfileIcon } from '../../../assets/svgs/icons';
import { ColorConfig } from '../../../configs';
import styled from 'styled-components/native';
import { TouchableContainer } from '../auxiliaries';
import { AccountContext as accountContext } from '../../contexts/account-context';
import { IPressable } from '../interfaces';
import isBase64 from 'is-base64';
import { INavigate } from '../../data-types/props';

type Props = IPressable & INavigate;

export function ProfileIconButton({ onPress, navigation }: Props) {
  const { account: accountInfo } = useContext(accountContext);
  const picture = accountInfo ? accountInfo.profile.picture.picture : null;
  const isFocused = navigation.isFocused();

  return (
    <TouchableContainer style={{ flex: 1 }} onPress={onPress}>
      <Container>
        {picture && isBase64(picture) ? (
          <Image
            isFocused={isFocused}
            fadeDuration={0}
            source={{
              uri: `data:image/jpeg;base64,${picture}`,
            }}
          />
        ) : (
          <ProfileIcon size='big' color={ColorConfig.gray4} />
        )}
      </Container>
    </TouchableContainer>
  );
}

interface IImageProps {
  isFocused: boolean;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image<IImageProps>`
  width: 26px;
  height: 26px;
  border-radius: 13px;
  border-color: ${({ isFocused }) =>
    isFocused ? ColorConfig.blue2 : 'transparent'};
  border-width: 2px;
`;
