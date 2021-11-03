import React from 'react';
import { Path } from 'react-native-svg';
import { ColorConstant } from '../../../configs';
import { BaseIcon, IIcon } from './base-icon';

export function MessageIcon(props: IIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 26, height: 22 }}>
      <Path
        d='M12.523 0C5.606 0 0 4.572 0 10.214c0 2.436 1.047 4.665 2.788 6.419-.611 2.475-2.656 4.68-2.68 4.704a.391.391 0 00-.074.427c.064.148.2.236.357.236 3.244 0 5.675-1.562 6.878-2.524 1.6.604 3.376.953 5.254.953 6.917 0 12.523-4.572 12.523-10.215C25.046 4.572 19.44 0 12.523 0zM6.262 11.786a1.567 1.567 0 01-1.566-1.572 1.567 1.567 0 113.13 0c0 .87-.699 1.572-1.564 1.572zm6.261 0a1.567 1.567 0 01-1.565-1.572c0-.869.7-1.571 1.565-1.571.866 0 1.566.702 1.566 1.571 0 .87-.7 1.572-1.566 1.572zm6.262 0a1.567 1.567 0 01-1.566-1.572 1.567 1.567 0 113.13 0c.001.87-.698 1.572-1.564 1.572z'
        fill={props.color ?? ColorConstant.blue2}
      />
    </BaseIcon>
  );
}
