import React from 'react';
import { Path } from 'react-native-svg';
import { ColorConfig } from '../../../configs';
import { BaseIcon, IIcon } from './base-icon';

export function ExpandIcon(props: Omit<IIcon, 'size'>) {
  return (
    <BaseIcon {...props} baseSize={{ width: 9, height: 6 }} size='big'>
      <Path
        d='M.061.935a.209.209 0 000 .295L4.2 5.37a.208.208 0 00.159.06.208.208 0 00.16-.06L8.656 1.23a.21.21 0 000-.295L8.213.49a.209.209 0 00-.295 0L4.359 4.05.8.491a.209.209 0 00-.295 0L.06.935z'
        fill={props.color ?? ColorConfig.blue2}
      />
    </BaseIcon>
  );
}
