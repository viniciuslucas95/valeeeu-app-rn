import * as React from 'react';
import { Path } from 'react-native-svg';
import { ThemeConfig } from '../../../configs';
import { BaseIcon, IIcon } from './base-icon';

export function ProfileIcon(props: IIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 17, height: 22 }}>
      <Path
        d='M13.357 4.714c0 2.604-2.286 4.715-5.107 4.715-2.82 0-5.107-2.111-5.107-4.715C3.143 2.111 5.429 0 8.25 0c2.82 0 5.107 2.11 5.107 4.714zM15.11 21.67a2.493 2.493 0 01-1.247.33H2.637a2.494 2.494 0 01-1.246-.33 2.698 2.698 0 01-.951-.921A2.979 2.979 0 01.208 18.1c.703-1.65 1.834-3.048 3.26-4.028a8.43 8.43 0 014.782-1.502 8.43 8.43 0 014.782 1.502c1.425.98 2.557 2.378 3.26 4.027a2.978 2.978 0 01-.232 2.649c-.24.386-.567.703-.95.921z'
        fill={props.color ?? ThemeConfig.app}
      />
    </BaseIcon>
  );
}
