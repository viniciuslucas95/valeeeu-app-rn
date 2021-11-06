import React from 'react';
import { HeartIcon } from '../../../../assets/svgs/icons';
import { ColorConfig } from '../../../../configs';
import { Toggleable } from '../types';
import { BaseTagToggle } from './base-tag-toggle';

export function HealthTagToggle({
  onPress,
  style,
  isToggled = false,
}: Toggleable) {
  return (
    <BaseTagToggle
      style={style}
      label='Saúde'
      onPress={onPress}
      isToggled={isToggled}
    >
      <HeartIcon color={ColorConfig.white1} size='big' />
    </BaseTagToggle>
  );
}
