import React from 'react';
import { Path } from 'react-native-svg';
import { BaseIcon, IIcon } from './base-icon';

export function FacebookLoginIcon(props: Omit<IIcon, 'size'>) {
  return (
    <BaseIcon {...props} baseSize={{ width: 56, height: 56 }} size='big'>
      <Path
        d='M56 28C56 12.536 43.464 0 28 0S0 12.536 0 28c0 13.976 10.24 25.56 23.625 27.66V36.094h-7.11V28h7.11v-6.169c0-7.017 4.18-10.893 10.576-10.893 3.063 0 6.268.546 6.268.546v6.891h-3.531c-3.478 0-4.563 2.158-4.563 4.373V28h7.766l-1.242 8.094h-6.524V55.66C45.761 53.56 56 41.976 56 28z'
        fill='#1877F2'
      />
      <Path
        d='M38.9 36.094L40.14 28h-7.765v-5.252c0-2.215 1.085-4.373 4.563-4.373h3.53v-6.89s-3.204-.547-6.267-.547c-6.396 0-10.576 3.876-10.576 10.893V28h-7.11v8.094h7.11V55.66a28.206 28.206 0 008.75 0V36.094h6.524z'
        fill='#fff'
      />
    </BaseIcon>
  );
}
