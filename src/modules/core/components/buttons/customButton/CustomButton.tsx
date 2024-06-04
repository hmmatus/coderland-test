import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

interface CustomButtonProps extends TouchableOpacityProps {
  title: string

}
const CustomButton = ({title, ...props}: CustomButtonProps) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, props.style]} {...props}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: '80%',
    height: 50,
  },
  text: {
    fontSize: 16,
  }
})

export default CustomButton;