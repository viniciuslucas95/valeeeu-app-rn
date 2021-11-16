import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';

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
  style?: StyleProp<ViewStyle>;
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
            <Text fontColor={ColorConfig.gray5}>{placeholder}</Text>
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
    borderColor: ColorConfig.gray5,
    backgroundColor: ColorConfig.white1,
    elevation: ShadowSizeConfig.elevation,
    shadowOffset: {
      width: ShadowSizeConfig.offsetX,
      height: ShadowSizeConfig.offsetY,
    },
    shadowRadius: ShadowSizeConfig.radius,
    shadowColor: ColorConfig.black1,
    shadowOpacity: ShadowSizeConfig.opacity,
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
