import React from 'react';
import { GlassesAndMustacheIcon } from '../../../../assets/svgs/icons';
import { ColorConfig } from '../../../../configs';
import { Toggleable } from '../types';
import { BaseTagToggle } from './base-tag-toggle';

export function BeautyAndFashionTagToggle({
  onPress,
  style,
  isToggled = false,
}: Toggleable) {
  return (
    <BaseTagToggle
      style={style}
      label='Beleza e Moda'
      onPress={onPress}
      isToggled={isToggled}
    >
      <GlassesAndMustacheIcon color={ColorConfig.white1} size='big' />
    </BaseTagToggle>
  );
}
