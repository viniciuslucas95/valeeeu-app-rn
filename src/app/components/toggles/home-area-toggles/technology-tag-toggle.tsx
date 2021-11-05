import React from 'react';
import { LaptopIcon } from '../../../../assets/svgs/icons';
import { ColorConfig } from '../../../../configs';
import { Toggleable } from '../toggleable';
import { BaseTagToggle } from './base-tag-toggle';

interface IProps extends Toggleable {}

export function TechnologyTagToggle({
  onPress,
  style,
  isToggled = false,
}: IProps) {
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
