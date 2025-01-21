
import prompt from 'react-native-prompt-android';

interface Buttons {
  text: string;
  onPress: (value: any) => void;
  style: 'cancel' | 'default' | 'destructive'
}

interface Options {
  textModal: string;
  descriptionModal: string;
  type: 'default' | 'plain-text' | 'secure-text'
  placeHolder: string;
  buttons: Buttons[]

}




export const showPrompAdapter = ({
  textModal,
  descriptionModal,
  type,
  placeHolder,
  buttons,
}: Options) => {
  prompt(
    textModal,
    descriptionModal,
    buttons,
    {
      type: type,
      cancelable: false,
      defaultValue: 'test',
      placeholder: placeHolder,
    }
  );

};
