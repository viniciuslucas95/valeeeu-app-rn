import React from 'react';
import { ToolsIcon } from '../../../../assets/svgs/icons';
import { ColorConfig } from '../../../../configs';
import { Toggleable } from '../toggleable';
import { BaseTagToggle } from './base-tag-toggle';

interface IProps extends Toggleable {}

export function WorkAndReformsTagToggle({
  onPress,
  style,
  isToggled = false,
}: IProps) {
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
