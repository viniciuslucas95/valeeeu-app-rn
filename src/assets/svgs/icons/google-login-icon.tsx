import React from 'react';
import { Path } from 'react-native-svg';
import { BaseIcon, IIcon } from './base-icon';

export function GoogleLoginIcon(props: Omit<IIcon, 'size'>) {
  return (
    <BaseIcon {...props} baseSize={{ width: 55, height: 56 }} size='big'>
      <Path
        d='M54.744 28.622c0-2.302-.186-3.982-.59-5.724H27.932v10.39h15.393c-.31 2.583-1.986 6.472-5.71 9.085l-.053.348 8.292 6.44.574.057c5.276-4.885 8.317-12.072 8.317-20.596z'
        fill='#4285F4'
      />
      <Path
        d='M27.93 56c7.542 0 13.873-2.489 18.497-6.782l-8.814-6.845c-2.358 1.65-5.524 2.8-9.682 2.8-7.386 0-13.655-4.884-15.89-11.635l-.327.028-8.622 6.689-.113.314C7.572 49.715 17.007 56 27.931 56z'
        fill='#34A853'
      />
      <Path
        d='M12.041 33.538a17.277 17.277 0 01-.93-5.538c0-1.93.34-3.796.9-5.538l-.016-.371-8.73-6.796-.286.136A28.083 28.083 0 000 28c0 4.511 1.086 8.773 2.98 12.569l9.061-7.031z'
        fill='#FBBC05'
      />
      <Path
        d='M27.93 10.827c5.245 0 8.783 2.27 10.8 4.169l7.883-7.716C41.773 2.769 35.472 0 27.931 0 17.007 0 7.572 6.284 2.979 15.431l9.031 7.031c2.266-6.75 8.535-11.635 15.92-11.635z'
        fill='#EB4335'
      />
    </BaseIcon>
  );
}
