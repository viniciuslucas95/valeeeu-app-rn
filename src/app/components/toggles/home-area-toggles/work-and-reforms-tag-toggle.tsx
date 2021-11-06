import React from 'react';
import { ToolsIcon } from '../../../../assets/svgs/icons';
import { ColorConfig } from '../../../../configs';
import { Toggleable } from '../types';
import { BaseTagToggle } from './base-tag-toggle';

export function WorkAndReformsTagToggle({
  onPress,
  style,
  isToggled = false,
}: Toggleable) {
  return (
    <BaseTagToggle
      style={style}
      label='Obras e Reformas'
      onPress={onPress}
      isToggled={isToggled}
    >
      <ToolsIcon color={ColorConfig.white1} size='big' />
    </BaseTagToggle>
  );
}
