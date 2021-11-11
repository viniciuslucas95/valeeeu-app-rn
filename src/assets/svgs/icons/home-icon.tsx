import React from 'react';
import { Path } from 'react-native-svg';

import { IconColor } from '../../../app/constants';
import { BaseIcon, ISvgIcon } from './base-icon';

export function HomeIcon(props: ISvgIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 23, height: 22 }}>
      <Path
        d='M22.784 9.08v10.88c0 .541-.22 1.06-.61 1.442-.39.383-.92.598-1.472.598H16.54a2.103 2.103 0 01-1.472-.598 2.02 2.02 0 01-.61-1.442v-3.97c0-.798-.323-1.562-.898-2.126a3.098 3.098 0 00-2.168-.88c-.403 0-.802.078-1.174.229a3.07 3.07 0 00-.994.651c-.285.28-.511.61-.665.975a2.953 2.953 0 00-.234 1.15v3.971c0 .541-.219 1.06-.61 1.442-.39.383-.919.598-1.471.598H2.081c-.552 0-1.031-.16-1.471-.598-.435-.43-.61-.9-.61-1.442V9.08c0-.313.073-.622.215-.903.142-.28.349-.525.604-.714L10.185.418a2.109 2.109 0 012.525 0l9.366 7.045c.235.2.42.45.543.73.122.28.178.583.165.888z'
        fill={props.color ?? IconColor.active}
      />
    </BaseIcon>
  );
}
