import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import OnboardingScreen from '../modules/core/screens/Onboarding';
import TaskScreen from '../modules/tasks/screens/TaskScreen';

// Stack Params List
type MainStackParamList = {
  Onboarding: undefined;
  Task: undefined;
  List: undefined;
};

export type OnBoardingNavProps = NativeStackScreenProps<MainStackParamList, 'Onboarding'>;
export type TaskNavProps = NativeStackScreenProps<MainStackParamList, 'Task'>;
export type ListNavProps = NativeStackScreenProps<MainStackParamList, 'List'>;

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Task" component={TaskScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
