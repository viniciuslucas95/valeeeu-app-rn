import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { StatusBar, useWindowDimensions, BackHandler } from 'react-native';
import { ColorConfig } from '../../../configs';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface IProps {
  closeModal(): void;
  content: JSX.Element;
  dragRef: React.MutableRefObject<boolean>;
}

export function BaseModal({ closeModal, content, dragRef }: IProps) {
  const { height: windowHeight } = useWindowDimensions();
  const [modalHeight, setModalHeight] = useState(0);
  const startPressPosition = useRef(0);
  const offset = useSharedValue(0);
  const opacity = useSharedValue(0);
  const offsetToClose = modalHeight / 2;
  const animatedOffset = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
    };
  });
  const animatedOpacity = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        startClosing();
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    if (modalHeight === 0) return;
    offset.value = withTiming(-modalHeight);
    opacity.value = withTiming(0.25);
  }, [modalHeight]);

  function startClosing() {
    offset.value = withTiming(0);
    opacity.value = withTiming(0);
    setTimeout(closeModal, 300);
  }

  return (
    <Container
      height={windowHeight}
      statusBarHeight={StatusBar.currentHeight ?? 0}
    >
      <Animated.View
        style={[
          {
            position: 'absolute',
            height: windowHeight,
            width: '100%',
            backgroundColor: 'black',
            opacity: 0,
          },
          animatedOpacity,
        ]}
      />
      <CloseModalArea onTouchStart={startClosing} />
      <Animated.View
        onTouchStart={({ nativeEvent: { touches } }) => {
          startPressPosition.current = touches[0].pageY;
        }}
        onTouchMove={({ nativeEvent: { touches } }) => {
          const newOffset = touches[0].pageY - startPressPosition.current;
          if (newOffset < 0) return;
          offset.value = -modalHeight + newOffset;
          if (newOffset > 0) dragRef.current = true;
        }}
        onTouchEndCapture={({ nativeEvent: { pageY } }) => {
          const newOffset = pageY - startPressPosition.current;
          if (newOffset >= offsetToClose) startClosing();
          else offset.value = withTiming(-modalHeight);
          startPressPosition.current = 0;
          dragRef.current = false;
        }}
        style={[
          {
            justifyContent: 'flex-end',
            alignItems: 'center',
            backgroundColor: 'transparent',
            bottom: -modalHeight,
            opacity: modalHeight === 0 ? 0 : 1,
          },
          animatedOffset,
        ]}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => setModalHeight(height)}
      >
        <DraggableIconContainer>
          <DraggableIcon />
        </DraggableIconContainer>
        <ContentContainer>{content}</ContentContainer>
      </Animated.View>
    </Container>
  );
}

interface IContainerProps {
  height: number;
  statusBarHeight: number;
}

const Container = styled.View<IContainerProps>`
  position: absolute;
  width: 100%;
  height: ${({ height }) => height + 'px'};
  justify-content: flex-end;
  margin-top: ${({ statusBarHeight }) => statusBarHeight + 'px'};
`;

const ContentContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${ColorConfig.white1};
`;

const CloseModalArea = styled.View`
  flex: 1;
  background-color: transparent;
`;

const DraggableIconContainer = styled.View`
  width: 100%;
  height: 40px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${ColorConfig.white1};
`;

const DraggableIcon = styled.View`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: ${ColorConfig.gray3};
`;
