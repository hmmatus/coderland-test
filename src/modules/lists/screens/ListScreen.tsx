import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../../core/components/wrappers/ScreenWrapper';

const ListScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text>List Screen</Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default ListScreen;
