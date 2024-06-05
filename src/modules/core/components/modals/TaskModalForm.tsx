import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Modal, TouchableOpacity } from 'react-native';
import CustomButton from '../buttons/customButton/CustomButton';

interface CustomModalProps {
  onClose: () => void;
  isVisible: boolean;
  onSave: (description: string) => void;
}

export const TaskModalForm = ({ onClose, isVisible, onSave }: CustomModalProps) => {
  const [description, setDescription] = useState('');
  const isNotEmpty = !!description && description.length > 0;

  const handleSave = () => {
    onSave(description);
    setDescription('');
    onClose();
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Add New Task</Text>
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
            <CustomButton
              disabled={!isNotEmpty}
              title="Save task"
              onPress={handleSave}
              style={styles.button}
            />
            <CustomButton title="Cancel" onPress={onClose} style={styles.button} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputWrapper: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    height: 100,
  },
  input: {
    fontSize: 16,
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  },
});

export default TaskModalForm;
