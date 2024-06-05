import React, { useState } from 'react';
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
  const isNotEmpty = !!description && description.length > 0;
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
            placeholder="Task description"
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton disabled={!isNotEmpty} title="Save task" onPress={onSave} />
          <CustomButton title="Cancel" onPress={props.onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 12,
    flex: 1,
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
    height: 150,
  },
  input: {},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
});

export default TaskModalForm;
