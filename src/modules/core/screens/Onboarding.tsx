import { StyleSheet, Text, View } from "react-native"
import ScreenWrapper from "../components/wrappers/ScreenWrapper";
import CustomButton from "../components/buttons/customButton/CustomButton";

const OnboardingScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <CustomButton title="Tasks" style={styles.button} />
        <CustomButton title="List" style={styles.button} />
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginBottom: 20
  }
})

export default OnboardingScreen;