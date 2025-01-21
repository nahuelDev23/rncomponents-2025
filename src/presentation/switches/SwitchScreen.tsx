import React, { useState } from 'react';
import CustomView from '../ui/CustomView';
import Card from '../ui/Card';
import CustomSwitch from '../ui/CustomSwitch';
import Separator from '../ui/Separator';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isSad: false,
    isHappy: true,
  });

  return (
    <CustomView style={{ paddingHorizontal: 10 }}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => setState(({ ...state, isActive: value }))}
          text="esta activo?"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isSad}
          onChange={value => setState(({ ...state, isSad: value }))}
          text="esta triste?"
        />

        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => setState(({ ...state, isHappy: value }))}
          text="esta feliz?"
        />


      </Card>
    </CustomView>
  );
};

export default SwitchScreen;

