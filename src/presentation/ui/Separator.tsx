import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';

interface Props {
  styles?: StyleProp<ViewStyle>
}
const Separator = ({ styles }: Props) => {

  return (
    <View style={[
      styles,
      {
        height: 16,
      },
    ]} />
  );
};

export default Separator;

const styles = StyleSheet.create({});
