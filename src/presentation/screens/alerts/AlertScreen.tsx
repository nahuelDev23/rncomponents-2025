
import { Alert } from 'react-native';
import React from 'react';
import CustomView from '../../ui/CustomView';
import { Title } from '../../ui/Title';
import { globalStyles } from '../../../config/theme/theme';
import Button from '../../ui/Button';
import Separator from '../../ui/Separator';
import { showPrompAdapter } from '../../../config/adapters/prompt.adapter';

const AlerScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',

      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ], {
      cancelable: true,
      onDismiss: () => {
        console.log('afuera');

      },
    });

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);


  const showPromp = () => {
    showPrompAdapter({
      textModal: 'la contra',
      descriptionModal: 'ponelo y listo',
      type: 'secure-text',
      placeHolder: 'pone algo',
      buttons: [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'ok', onPress: (value) => console.log(value), style: 'default' },
      ],

    });
    //!nativo de IOS
    //   Alert.prompt(
    //     'tu email?',
    //     'lorem ipson',
    //     (valor: string) => console.log(valor),
    //     'secure-text',
    //     'soy el valor por defecto',
    //     'number-pad'
    //   );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />
      <Button
        onPress={createTwoButtonAlert}
        text="alerta - 2 botones" />
      <Separator />
      <Button
        onPress={createThreeButtonAlert}
        text="alerta - 3 botones" />
      <Separator />
      <Button
        onPress={showPromp}
        text="Promp input" />



    </CustomView>
  );
};

export default AlerScreen;

