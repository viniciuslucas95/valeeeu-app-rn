import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components/native';
import { SizeConfig, ThemeConfig } from '../../configs';
import { SizeConstant } from '../../configs/constants';
import { FontFamily } from '../data-types/enums';
import { ViewElementStyle } from '../data-types/types';
import { UnitHandler } from '../helpers';
import { Text } from '../styled-components';

interface IProps {
  hasSecureText?: boolean;
  label?: string;
  placeholder?: string;
  icon?: JSX.Element;
  button?: JSX.Element;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  style?: ViewElementStyle;
}

const iconPositionAdjust = UnitHandler.vwPx(0.5);

export function TextInput({
  button,
  icon,
  hasSecureText,
  placeholder,
  label,
  text,
  style,
  setText,
}: PropsWithChildren<IProps>) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Container style={style}>
      <InputContainer isFocused={isFocused}>
        {icon ? <IconContainer>{icon}</IconContainer> : null}
        <Input
          placeholder={placeholder}
          placeholderTextColor={ThemeConfig.placeholder}
          secureTextEntry={hasSecureText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={text ?? undefined}
          onChangeText={(e) => setText(e)}
        />
        {button}
      </InputContainer>
      <LabelContainer>
        <Text
          fontFamily={FontFamily.medium}
          fontSize={SizeConfig.defaultTextVwPx}
          color={isFocused ? ThemeConfig.active : ThemeConfig.text}
        >
          {label}
        </Text>
      </LabelContainer>
    </Container>
  );
}

const Container = styled.View`
  width: ${SizeConfig.maxElementWidthVwPx};
`;

const Input = styled.TextInput`
  flex: 1;
  margin-right: ${SizeConfig.smallMarginVwPx};
  font-family: ${FontFamily.regular};
  font-size: ${SizeConfig.defaultTextVwPx};
  color: ${ThemeConfig.text};
`;

const IconContainer = styled.View`
  margin-right: ${SizeConfig.smallMarginVwPx};
  top: ${iconPositionAdjust};
`;

interface IInputProps {
  isFocused?: boolean;
}

const InputContainer = styled.View<IInputProps>`
  flex-direction: row;
  align-items: center;
  padding: 0 ${SizeConfig.mediumMarginVwPx};
  height: ${SizeConfig.bigElementHeightVwPx};
  border-radius: ${SizeConfig.borderRadiusVwPx};
  border-width: ${({ isFocused }) =>
    isFocused
      ? SizeConfig.hugeBorderWidthVwPx
      : SizeConfig.mediumBorderWidthVwPx};
  border-color: ${({ isFocused }) =>
    isFocused ? ThemeConfig.active : ThemeConfig.inactive};
`;

const LabelContainer = styled.View`
  background-color: ${ThemeConfig.background};
  position: absolute;
  padding: 0 ${SizeConfig.mediumMarginVwPx};
  left: ${SizeConfig.mediumMarginVwPx};
  top: -${UnitHandler.vwPx(SizeConstant.mediumText * 0.75)};
`;
