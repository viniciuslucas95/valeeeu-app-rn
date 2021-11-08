import React from 'react';
import { OptionsIcon } from '../../../assets/svgs/icons';
import { INavigate, IStyleable } from '../../data-types/props';
import { IPressable } from '../interfaces';
import { IconButton } from './icon-button';

type Props = INavigate & IPressable & IStyleable;

export function ProfileOptionsButton({ navigation, onPress, style }: Props) {
  return (
    <IconButton style={style} onPress={onPress} side='right'>
      <OptionsIcon size='medium' />
    </IconButton>
  );
}
