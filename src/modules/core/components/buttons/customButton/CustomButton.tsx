import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
}
const CustomButton = ({ title, ...props }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, props.style, { opacity: props.disabled ? 0.4 : 1 }]}
      {...props}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
});

export default CustomButton;
