import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import CustomView from '../ui/CustomView';
import { Title } from '../ui/Title';
import { globalStyles } from '../../config/theme/theme';
import Card from '../ui/Card';
import Separator from '../ui/Separator';

const TextInputScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

      <ScrollView>
        <CustomView style={globalStyles.globalMargin}>
          <Title text="text inputs" safe />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, name: value })}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="email"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({ ...form, email: value })}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="phone"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />


          </Card>

          <Separator />
          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>

          </Card>
        </CustomView>

      </ScrollView>

    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

