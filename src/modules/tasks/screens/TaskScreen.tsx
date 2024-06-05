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
          style={{ width: '100%', marginTop: 12 }}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        />
        <TaskModalForm isVisible={modalVisible} onClose={closeModal} onSave={onSaveTask} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 12,
  },
  itemContainer: {
    width: '100%',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default TaskScreen;
