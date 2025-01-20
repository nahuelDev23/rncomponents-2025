import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../../config/theme/theme';
interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}
export const Title = ({ text, safe, white }: Props) => {
  return (
    <Text style={{
      ...globalStyles.title,
    }}>{text}</Text>
  );
};

