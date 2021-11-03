import React from 'react';
import { ToolsIcon } from '../../../assets/svgs/icons';
import { ColorConstant } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { BaseTagToggle } from './base-tag-toggle';

interface IProps {
  onPress(): void;
  isToggled?: boolean;
  style?: ViewElementStyle;
}

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
      <ToolsIcon color={ColorConstant.white1} size='big' />
    </BaseTagToggle>
  );
}
