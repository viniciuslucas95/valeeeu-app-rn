import React from 'react';
import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ExpandIcon } from '../../../../assets';

import {
  BorderSizeConfig,
  ColorConfig,
  ElementSizeConfig,
  IconSizeConfig,
  MarginSizeConfig,
} from '../../../../configs';
import { Text } from '../../../components';
import { FontFamily } from '../../../constants';
import { rem } from '../../../helpers';

interface IProps {
  style?: StyleProp<ViewStyle>;
  placeholder: string;
  text?: string;
  onPress?(): void;
}

export function FilterTagItem({ style, placeholder, text, onPress }: IProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.pressableArea, style]}>
        <View
          style={[
            styles.container,
            { borderColor: onPress ? ColorConfig.gray6 : ColorConfig.gray3 },
          ]}
        >
          <Text
            fontFamily={FontFamily.robotoLight}
            fontColor={onPress ? ColorConfig.gray6 : ColorConfig.gray3}
          >
            {text ?? placeholder}
          </Text>
          <ExpandIcon
            style={styles.icon}
            height={IconSizeConfig.tiny * 0.75}
            color={onPress ? ColorConfig.gray5 : ColorConfig.gray3}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  pressableArea: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: ElementSizeConfig.minPressableArea,
    borderRadius: rem(BorderSizeConfig.bigRadius),
  },
  container: {
    flexDirection: 'row',
    borderRadius: rem(BorderSizeConfig.bigRadius * 2),
    borderWidth: BorderSizeConfig.inactive,
    backgroundColor: ColorConfig.white1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: rem(MarginSizeConfig.medium),
    paddingVertical: rem(MarginSizeConfig.tiny),
  },
  icon: {
    marginTop: rem(MarginSizeConfig.tiny * 0.75),
    marginLeft: rem(MarginSizeConfig.tiny),
  },
});
