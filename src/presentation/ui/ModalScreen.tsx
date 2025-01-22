import { Modal, Platform, View } from 'react-native';
import React, { useState } from 'react';
import CustomView from './CustomView';
import { Title } from './Title';
import Button from './Button';

const ModalScreen = () => {

  const [isVisible, setIsVisible] = useState(false);
  return (
    <CustomView margin>
      <Title text="Modal" safe />
      <Button
        text="Abrir modal"
        onPress={() => setIsVisible(true)}
      />

      <Modal visible={isVisible} animationType="slide">
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,.1)',
        }}>
          <View style={{ paddingHorizontal: 10 }}>
            <Title text="modal content" safe />
          </View>
          <View style={{ flex: 1 }} />
          <Button
            onPress={() => setIsVisible(false)}
            text="cerrar"
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};

export default ModalScreen;

