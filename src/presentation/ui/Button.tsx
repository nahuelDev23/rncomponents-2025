import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import React from 'react';
import { colors, globalStyles } from '../../config/theme/theme';
interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;
  onPress: () => void;
}
const Button = ({ text, styles, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ([
        styles,
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
      ])}
    >
      <Text style={[
        globalStyles.btnPrimaryText,
        {
          color: colors.buttonTextColor,
        },
      ]}>{text}</Text>
    </Pressable>
  );
};

export default Button;

