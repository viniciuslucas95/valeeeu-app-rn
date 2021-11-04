import React from 'react';
import { GlassesAndMustacheIcon } from '../../../assets/svgs/icons';
import { ColorConfig } from '../../../configs';
import { ViewElementStyle } from '../../data-types/types';
import { BaseTagToggle } from './base-tag-toggle';

interface IProps {
  onPress(): void;
  isToggled?: boolean;
  style?: ViewElementStyle;
}

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
