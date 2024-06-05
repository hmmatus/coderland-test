import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CustomButton from '../buttons/customButton/CustomButton';
import Modal, { ModalProps } from 'react-native-modal';

interface CustomModalProps {
  onClose: () => void;
  isVisible: boolean;
  onSave: (description: string) => void;
}
export const TaskModalForm = ({ ...props }: CustomModalProps) => {
  const [description, setDescription] = useState('');
  const isNotEmpty = !!description;
  const onSave = () => {
    props.onClose();
    props.onSave(description);
    setDescription('');
  };
  return (
    <Modal isVisible={props.isVisible} style={styles.modal} hasBackdrop>
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Description"
            placeholderTextColor="grey"
            numberOfLines={10}
            multiline={true}
            onChangeText={(value) => setDescription(value)}
            value={description}
          />
        </View>
        <CustomButton disabled={!isNotEmpty} title="Save task" onPress={onSave} />
        <CustomButton title="Cancel" onPress={props.onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 12,
  },
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
  inputWrapper: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    padding: 5,
  },
  input: {
    height: 150,
    justifyContent: 'flex-start',
  },
  button: {
    marginBottom: 5,
  },
});

export default TaskModalForm;
