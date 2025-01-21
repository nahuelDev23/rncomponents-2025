import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { globalStyles } from '../../config/theme/theme';
import { Title } from '../ui/Title';
import { MenuItem } from '../ui/MenuItem';

export const animationItems = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },

];
export const menuItems = [

  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

export const uiItems = [
  // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  }];

export const HomeScreen = () => {
  return (
    <View style={globalStyles.mainContainer}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>

          <Title text="Opciones de menu" />
          {
            animationItems.map((item, index) => (
              <MenuItem
                key={item.component}
                {...item}
                //para calcular el border radius
                isFirst={index === 0}
                isLast={index === menuItems.length - 1}
              />
            ))
          }
          <View style={{ height: 10 }} />
          {
            menuItems.map((item, index) => (
              <MenuItem
                key={item.component}
                {...item}
                //para calcular el border radius
                isFirst={index === 0}
                isLast={index === menuItems.length - 1}
              />
            ))
          }

          <View style={{ height: 10 }} />
          {
            uiItems.map((item, index) => (
              <MenuItem
                key={item.component}
                {...item}
                //para calcular el border radius
                isFirst={index === 0}
                isLast={index === menuItems.length - 1}
              />
            ))
          }

        </ScrollView>
      </View>
      <Text />
    </View>
  );
};

