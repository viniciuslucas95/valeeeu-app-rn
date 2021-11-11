import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';

import { ViewStyle } from '../../types';
import { FontFamily, TextInputColor, TextInputSize } from '../../constants';
import { Text } from '../text';

interface IProps {
  placeholder: string;
  onPress(): void;
  style?: ViewStyle;
  width?: number;
  label?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export function FakeTextInputButton({
  style,
  width,
  label,
  leftIcon,
  rightIcon,
  placeholder,
  onPress,
}: IProps) {
  const { width: windowWidth } = useWindowDimensions();
  const maxWidth = windowWidth * 0.9;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <View
          style={[
            styles.borderContainer,
            width ? { width: width } : { flex: 1 },
            { maxWidth: maxWidth },
          ]}
        >
          {leftIcon}
          <View
            style={[
              leftIcon ? { marginLeft: TextInputSize.paddingHorizontal } : null,
              rightIcon
                ? { marginRight: TextInputSize.paddingHorizontal }
                : null,
              styles.textContainer,
            ]}
          >
            <Text fontColor={TextInputColor.placeholder}>{placeholder}</Text>
          </View>
          {rightIcon}
          {label ? (
            <View style={styles.labelContainer}>
              <Text fontFamily={FontFamily.robotoMedium}>{label}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: TextInputSize.height,
    flexDirection: 'row',
  },
  borderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: TextInputSize.borderRadius,
    paddingHorizontal: TextInputSize.paddingHorizontal,
    borderWidth: TextInputSize.inactiveBorderWidth,
    borderColor: TextInputColor.inactiveBorder,
    backgroundColor: TextInputColor.background,
    elevation: 2.5,
  },
  textContainer: {
    flex: 1,
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: TextInputSize.paddingHorizontal,
    backgroundColor: TextInputColor.background,
    bottom: TextInputSize.height * 0.8,
    left: TextInputSize.paddingHorizontal,
  },
});
