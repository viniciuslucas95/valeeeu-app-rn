import React from 'react';
import { CarIcon } from '../../../../assets/svgs/icons';
import { ColorConfig } from '../../../../configs';
import { Toggleable } from '../toggleable';
import { BaseTagToggle } from './base-tag-toggle';

interface IProps extends Toggleable {}

export function VehiclesTagToggle({
  onPress,
  style,
  isToggled = false,
}: IProps) {
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
