import React from 'react';
import { CarIcon } from '../../../assets/svgs/icons';
import { ColorConstant } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { BaseTagToggle } from './base-tag-toggle';

interface IProps {
  onPress(): void;
  isToggled?: boolean;
  style?: ViewElementStyle;
}

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
      <CarIcon color={ColorConstant.white1} size='big' />
    </BaseTagToggle>
  );
}
