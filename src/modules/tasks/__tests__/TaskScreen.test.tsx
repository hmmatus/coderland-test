import React from 'react';
import TasksScreen from '../screens/TaskScreen';
import { renderWithProviders } from '../../../utils/test/test-utils';
import { screen } from '@testing-library/react-native';
import reducer, { addTask } from '../../../redux/slice/task';
import { TaskI } from '../model/task.model';
jest.mock('react-native-modal', () => {
  return {
    __esModule: true,
    default: 'Modal',
  };
});
describe('Testing Task Screen', () => {
  it('should render the task screen', () => {
    renderWithProviders(<TasksScreen />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
  it('Should render the task screen with a task', () => {
    const task: TaskI = {
      id: 1,
      description: 'Task 1',
    };
    renderWithProviders(<TasksScreen />, {
      preloadedState: {
        tasks: {
          tasks: [task],
        },
      },
    });
    expect(screen.toJSON()).toMatchSnapshot();
  });
  it('should add a task to an empty list', () => {
    const previousState = {
      tasks: [],
    };
    expect(reducer(previousState, addTask({ id: 1, description: 'Description 1' }))).toEqual({
      tasks: [{ id: 1, description: 'Description 1' }],
    });
  });
  test('should handle a task being added to an existing list', () => {
    const previousState = {
      tasks: [{ id: 1, description: 'Description 1' }],
    };

    expect(reducer(previousState, addTask({ id: 2, description: 'Description 2' }))).toEqual({
      tasks: [
        { id: 1, description: 'Description 1' },
        { id: 2, description: 'Description 2' },
      ],
    });
  });
});
