import React from 'react';
import { LaptopIcon } from '../../../assets/svgs/icons';
import { ColorConstant } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { BaseTagToggle } from './base-tag-toggle';

interface IProps {
  onPress(): void;
  isToggled?: boolean;
  style?: ViewElementStyle;
}

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
      <LaptopIcon color={ColorConstant.white1} size='big' />
    </BaseTagToggle>
  );
}
