import React, { PropsWithChildren } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

export function KeyboardDispenser({ children }: PropsWithChildren<any>) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}
