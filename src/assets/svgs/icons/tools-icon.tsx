import React from 'react';
import { Path } from 'react-native-svg';
import { ColorConstant } from '../../../configs';
import { BaseIcon, IIcon } from './base-icon';

export function ToolsIcon(props: IIcon) {
  return (
    <BaseIcon {...props} baseSize={{ width: 22, height: 22 }}>
      <Path
        d='M21.33 18.098L10.38 7.148a2.48 2.48 0 01-.717-1.939 4.838 4.838 0 00-1.402-3.8A4.81 4.81 0 004.848 0c-.465 0-.93.066-1.38.198l2.907 2.906c.315 1.456-1.796 3.591-3.27 3.27L.2 3.468c-.133.45-.2.916-.2 1.383a4.826 4.826 0 005.21 4.813 2.473 2.473 0 011.937.718l10.95 10.949a2.287 2.287 0 003.234-3.233zm-1.622 2.527a.916.916 0 110-1.833.916.916 0 010 1.833zM12.435 6.61l4.883-4.875a2.73 2.73 0 011.937-.804c.7 0 1.401.268 1.937.804a2.742 2.742 0 01.008 3.882l-4.882 4.875-.953-.952 4.645-4.638a.394.394 0 00-.001-.558.395.395 0 00-.56 0L14.805 8.98l-.816-.816 4.645-4.638a.396.396 0 00-.56-.56l-4.645 4.637-.993-.993zm-3.236 8.415l-4.792 4.753c-.208.21-.387.447-.526.71l-.276.531L1.68 22l-.763-.765.94-1.967.53-.277c.263-.137.515-.301.725-.511l4.792-4.753 1.295 1.298z'
        fill={props.color ?? ColorConstant.blue2}
      />
    </BaseIcon>
  );
}
