//ranfes
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../../config/theme/theme';
import { useAnimation } from '../../hooks/useAnimation';

const Animation101Screen = () => {


  const { fadeOut, fadeIn, animatedTop, animatedOpacity, startMovingTopPosition } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View style={[
        styles.purpleBox,
        {
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        },
      ]} />

      <Pressable onPress={() => {
        fadeIn({});
        startMovingTopPosition({
          initialPosition: -100,
          easing: Easing.elastic(1),
          duration: 700,
        });
      }} style={{ marginTop: 10 }}>

        <Text>FadeIN</Text>

      </Pressable>

      <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
        <Text>Fadeou</Text>
      </Pressable>
    </View >
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
