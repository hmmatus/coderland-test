import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const ScreenWrapper = ({ children }: { children: JSX.Element }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
