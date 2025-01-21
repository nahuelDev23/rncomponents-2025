import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Switch } from 'react-native-gesture-handler';
import { colors } from '../../config/theme/theme';

interface Props {
  isOn: boolean;
  text?: string;

  onChange: (value: boolean) => void;
}

const CustomSwitch = ({ isOn, text, onChange }: Props) => {
  return (
    <View style={styles.switchRow}>
      {
        text && (<Text style={{ color: colors.text }}>{text}</Text>)
      }
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isOn ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={isOn}
      />

    </View>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
