import React from 'react';
import { Circle } from 'react-native-svg';

import { ColorConfig } from '../../../configs';

import { BaseIcon, ISvgIcon } from './base-icon';

interface IProps extends ISvgIcon {
  borderColor?: string;
}

export function StatusIcon(props: IProps) {
  return (
    <BaseIcon {...props} baseSize={{ width: 22, height: 23 }}>
      <Circle
        cx={11}
        cy={11}
        r={10}
        fill={props.color ?? ColorConfig.green1}
        stroke={props.borderColor ?? ColorConfig.white1}
        strokeWidth={2}
      />
    </BaseIcon>
  );
}
