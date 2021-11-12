import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from 'react-native';

import { ViewStyle } from '../../types';
import { FontFamily } from '../../constants';
import { Text } from '../text';
import {
  BorderSizeConfig,
  ColorConfig,
  ElementSizeConfig,
  MarginSizeConfig,
  ShadowSizeConfig,
} from '../../../configs';

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
  const maxWidth = windowWidth - MarginSizeConfig.big * 2;

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
              leftIcon ? { marginLeft: MarginSizeConfig.medium } : null,
              rightIcon ? { marginRight: MarginSizeConfig.medium } : null,
              styles.textContainer,
            ]}
          >
            <Text fontColor={ColorConfig.gray4}>{placeholder}</Text>
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
    height: ElementSizeConfig.minPressableArea,
    flexDirection: 'row',
  },
  borderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BorderSizeConfig.smallRadius,
    paddingHorizontal: MarginSizeConfig.medium,
    borderWidth: BorderSizeConfig.inactive,
    borderColor: ColorConfig.gray4,
    backgroundColor: ColorConfig.white1,
    elevation: ShadowSizeConfig.smallElevation,
  },
  textContainer: {
    flex: 1,
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: MarginSizeConfig.medium,
    backgroundColor: ColorConfig.white1,
    bottom: ElementSizeConfig.minPressableArea * 0.8,
    left: MarginSizeConfig.medium,
  },
});
