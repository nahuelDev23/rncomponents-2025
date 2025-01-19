Installation
Install the common package

npm install --save @react-native-vector-icons/common
Install the packages for the icons you want use

npm install --save @react-native-vector-icons/fontawesome6 @react-native-vector-icons/evil-icons
Depending on the platform you're targeting (iOS/Android/Windows), follow the appropriate setup instructions below.

If you are using one of the following fonts refer to their guides for further instructions

FontAwesome 6
FontAwesome 6 Pro
FontAwesome 5
FontAwesome 5 Pro
Fontello
Icomoon
Setup
Please refer to the guide for Expo, React Native or Web for further instructions.

Icon Component
You can either use one of the bundled icons above or roll your own custom font.

import Icon from '@react-native-vector-icons/fontawesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

