import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { TextButton } from './buttons';
import { Modal as ModalNative, StyleSheet } from 'react-native';
import { ColorConfig, SizeConfig } from '../../configs';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface IItem {
  text: string;
  onPress(): void;
}

interface IProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  items: IItem[];
}

export function Modal({ isVisible, setIsVisible, items }: IProps) {
  const [height, setHeight] = useState(0);
  const startPressPosition = useRef(0);
  const isDragging = useRef(false);
  const offset = useSharedValue(0);
  const offsetToClose = height / 2;
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
    };
  });
  useEffect(() => {
    if (!isVisible) offset.value = 0;
  }, [isVisible]);

  return (
    <>
      <ModalNative
        animationType='fade'
        onRequestClose={() => setIsVisible(false)}
        transparent={true}
        visible={isVisible}
      >
        <BackShadow />
      </ModalNative>
      <ModalNative
        animationType='slide'
        onRequestClose={() => setIsVisible(false)}
        transparent={true}
        visible={isVisible}
      >
        <HideArea onTouchStart={() => setIsVisible(false)} />
        <Animated.View
          onTouchStart={({ nativeEvent: { touches } }) => {
            offset.value = 0;
            startPressPosition.current = touches[0].pageY;
          }}
          onTouchMove={({ nativeEvent: { touches } }) => {
            const newOffset = touches[0].pageY - startPressPosition.current;
            if (newOffset < 0) return;
            offset.value = newOffset;
            if (newOffset > 0) isDragging.current = true;
          }}
          onTouchEndCapture={({ nativeEvent: { pageY } }) => {
            const newOffset = pageY - startPressPosition.current;
            if (newOffset >= offsetToClose) setIsVisible(false);
            else offset.value = 0;
            startPressPosition.current = 0;
            isDragging.current = false;
          }}
          style={[styles.container, animatedStyles]}
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => setHeight(height)}
        >
          <DraggableContainer>
            <Draggable />
          </DraggableContainer>
          {items.map((item, index) => (
            <TextButton
              isDragging={isDragging}
              key={index}
              onPress={item.onPress}
            >
              {item.text}
            </TextButton>
          ))}
        </Animated.View>
      </ModalNative>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 8,
    paddingBottom: SizeConfig.bigMargin,
    backgroundColor: ColorConfig.white1,
  },
});

const DraggableContainer = styled.View`
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${ColorConfig.white1};
`;

const Draggable = styled.View`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: ${ColorConfig.gray3};
`;

const BackShadow = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.25);
`;

const HideArea = styled.View`
  flex: 1;
  opacity: 0;
`;
