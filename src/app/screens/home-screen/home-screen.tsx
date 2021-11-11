import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { hideAsync } from 'expo-splash-screen';

import { AppColor, IconColor } from '../../constants';
import { FakeTextInputButton } from '../../components';
import { SearchIcon } from '../../../assets/svgs';

export function HomeScreen() {
  useEffect(() => {
    async function disableSplashScreenAsync() {
      await hideAsync();
    }

    disableSplashScreenAsync();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FakeTextInputButton
        onPress={() => console.log('Search button pressed...')}
        leftIcon={<SearchIcon height={16} color={IconColor.inactive} />}
        placeholder='Procurar serviço...'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColor.background,
  },
});
