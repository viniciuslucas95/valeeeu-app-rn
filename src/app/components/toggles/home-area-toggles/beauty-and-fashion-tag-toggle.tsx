import React from 'react';
import { GlassesAndMustacheIcon } from '../../../../assets/svgs/icons';
import { ColorConfig } from '../../../../configs';
import { Toggleable } from '../toggleable';
import { BaseTagToggle } from './base-tag-toggle';

interface IProps extends Toggleable {}

export function BeautyAndFashionTagToggle({
  onPress,
  style,
  isToggled = false,
}: IProps) {
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
