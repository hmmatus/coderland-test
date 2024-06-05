import { FlatList, StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '../../core/components/wrappers/ScreenWrapper';
import CustomButton from '../../core/components/buttons/customButton/CustomButton';
import { useState } from 'react';
import TaskModalForm from '../../core/components/modals/TaskModalForm';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addTask } from '../../../redux/slice/task';

const TaskScreen = () => {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.tasks);
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };
  const onSaveTask = (description: string) => {
    dispatch(
      addTask({
        id: Math.floor(Math.random() * 100),
        description,
      })
    );
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <CustomButton
          title="Add Task"
          onPress={() => {
            setModalVisible(true);
          }}
        />
        <FlatList
          refreshing
          data={tasks}
          renderItem={({ item }) => <Text>{item.description}</Text>}
        />
        <TaskModalForm isVisible={modalVisible} onClose={closeModal} onSave={onSaveTask} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
});

export default TaskScreen;
