import React from 'react';
import TasksScreen from '../screens/TaskScreen';
import { renderWithProviders } from '../../../utils/test/test-utils';
import { screen } from '@testing-library/react-native';
describe('Testing Task Screen', () => {
  it('should render the task screen', () => {
    renderWithProviders(<TasksScreen />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
