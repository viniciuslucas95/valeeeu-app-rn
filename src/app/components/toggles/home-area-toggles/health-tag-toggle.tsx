import React from 'react';
import { HeartIcon } from '../../../../assets/svgs/icons';
import { ColorConfig } from '../../../../configs';
import { Toggleable } from '../toggleable';
import { BaseTagToggle } from './base-tag-toggle';

interface IProps extends Toggleable {}

export function HealthTagToggle({ onPress, style, isToggled = false }: IProps) {
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
