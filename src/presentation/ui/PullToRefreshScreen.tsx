import { RefreshControl, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import { Title } from './Title';
import CustomView from './CustomView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../../config/theme/theme';

const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { top } = useSafeAreaInsets();

  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {

      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange']}
          onRefresh={onRefresh}
        />}

      style={[globalStyles.mainContainer, globalStyles.globalMargin]}
    >
      <CustomView margin>
        <Title text="pull to refresh" safe />
        <Text>PullToRefreshScreen</Text>
      </CustomView>
    </ScrollView>
  );
};

export default PullToRefreshScreen;

