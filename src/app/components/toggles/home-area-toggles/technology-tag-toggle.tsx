import React from 'react';
import { LaptopIcon } from '../../../../assets/svgs/icons';
import { ColorConfig } from '../../../../configs';
import { Toggleable } from '../types';
import { BaseTagToggle } from './base-tag-toggle';

export function TechnologyTagToggle({
  onPress,
  style,
  isToggled = false,
}: Toggleable) {
  return (
    <BaseTagToggle
      style={style}
      label='Tecnologia'
      onPress={onPress}
      isToggled={isToggled}
    >
      <LaptopIcon color={ColorConfig.white1} size='big' />
    </BaseTagToggle>
  );
}
