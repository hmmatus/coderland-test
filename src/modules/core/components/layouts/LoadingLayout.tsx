import React from 'react';
import { SafeAreaView, ActivityIndicator, StyleSheet, Text } from 'react-native';
const LoadingLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
      <Text>Loading...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingLayout;
