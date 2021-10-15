import React, { PropsWithChildren } from 'react';
import { ColorConstant, SizeConstant } from '../../configs/constants';
import { Font } from '../dataTypes/enums';
import { ViewElementStyle } from '../dataTypes/types';
import { Text } from '../styles/components';

interface IProps {
  children: string;
  style?: ViewElementStyle;
  optionalText?: string;
}

export function SectionTitle({
  children,
  optionalText,
  style,
}: PropsWithChildren<IProps>) {
  return (
    <Text style={style} font={Font.robotoMedium} size={SizeConstant.fontSize20}>
      {children}
      <Text
        font={Font.robotoItalic}
        color={ColorConstant.gray}
        size={SizeConstant.fontSize12}
      >
        {' '}
        {optionalText}
      </Text>
    </Text>
  );
}
