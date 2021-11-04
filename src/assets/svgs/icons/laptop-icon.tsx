import React from 'react';
import { Path } from 'react-native-svg';
import { ColorConfig } from '../../../configs';
import { BaseIcon, IIcon } from './base-icon';

export function LaptopIcon(props: IIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 27, height: 22 }}>
      <Path
        d='M24.2 1.32C24.2.59 23.61 0 22.88 0H3.52C2.79 0 2.2.59 2.2 1.32V14.3h22V1.32zM22 12.1H4.4V2.2H22v9.9zm2.2 3.3h-22c-.217.41-2.2 5.04-2.2 5.498C0 21.472.46 22 1.102 22h24.196c.642 0 1.102-.528 1.102-1.102 0-.458-1.983-5.089-2.2-5.498zm-13.452 5.5l.514-1.1h3.875l.514 1.1h-4.903z'
        fill={props.color ?? ColorConfig.blue2}
      />
    </BaseIcon>
  );
}
