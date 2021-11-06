import React, { PropsWithChildren } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { IStyleable } from '../../data-types/props';

interface IProps extends IStyleable {
  onPress(): void;
  children: JSX.Element;
}

export function TouchableContainer({
  onPress,
  style,
  children,
}: PropsWithChildren<IProps>) {
  return (
    <View style={style}>
      <TouchableWithoutFeedback onPress={onPress}>
        {children}
      </TouchableWithoutFeedback>
    </View>
  );
}
