import React from 'react';
import { CarIcon } from '../../../../assets/svgs/icons';
import { ColorConfig } from '../../../../configs';
import { Toggleable } from '../types';
import { BaseTagToggle } from './base-tag-toggle';

export function VehiclesTagToggle({
  onPress,
  style,
  isToggled = false,
}: Toggleable) {
  return (
    <BaseTagToggle
      style={style}
      label='Veículos'
      onPress={onPress}
      isToggled={isToggled}
    >
      <CarIcon color={ColorConfig.white1} size='big' />
    </BaseTagToggle>
  );
}
