import { StyleSheet, View } from 'react-native';
import ScreenWrapper from '../components/wrappers/ScreenWrapper';
import CustomButton from '../components/buttons/customButton/CustomButton';
import { OnBoardingNavProps } from '../../../navigator/main';

const OnboardingScreen = ({ navigation }: OnBoardingNavProps) => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <CustomButton
          title="Tasks"
          style={styles.button}
          onPress={() => {
            navigation.navigate('Task');
          }}
        />
        <CustomButton
          title="List"
          onPress={() => {
            navigation.navigate('List');
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 20,
  },
});

export default OnboardingScreen;
