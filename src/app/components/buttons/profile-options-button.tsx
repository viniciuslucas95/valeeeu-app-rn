import React from 'react';
import { OptionsIcon } from '../../../assets/svgs/icons';
import { INavigate } from '../../data-types/props';
import { IPressable } from '../interfaces';
import { IconButton } from './icon-button';

type Props = INavigate & IPressable;

export function ProfileOptionsButton({ navigation, onPress }: Props) {
  return (
    <IconButton onPress={onPress} side='right'>
      <OptionsIcon size='medium' />
    </IconButton>
  );
}
