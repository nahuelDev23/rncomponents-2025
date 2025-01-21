import { StyleProp, View, ViewStyle } from 'react-native';
import React, { ReactNode } from 'react';
import { globalStyles } from '../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>
  children?: ReactNode;
  margin?: boolean;
}
const CustomView = ({ children, style, margin = false }: Props) => {
  return (
    <View style={[
      globalStyles.mainContainer,
      style,
      margin ? { margin: 10 } : undefined,
    ]}>
      {children}
    </View>
  );
};

export default CustomView;

