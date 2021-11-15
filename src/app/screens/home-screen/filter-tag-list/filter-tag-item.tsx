import React from 'react';
import { StyleProp, View, ViewStyle, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ExpandIcon } from '../../../../assets/svgs';

import {
  BorderSizeConfig,
  ColorConfig,
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
  onPress(): void;
}

export function FilterTagItem({ style, placeholder, text, onPress }: IProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text fontFamily={FontFamily.robotoLight} fontColor={ColorConfig.gray4}>
          {text ?? placeholder}
        </Text>
        <ExpandIcon
          style={styles.icon}
          height={IconSizeConfig.tiny * 0.75}
          color={ColorConfig.gray3}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: rem(BorderSizeConfig.bigRadius * 2),
    borderWidth: BorderSizeConfig.inactive,
    borderColor: ColorConfig.gray4,
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
