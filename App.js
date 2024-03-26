import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import ToDoList from './screens/ToDoList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="ToDoList" 
          component={ToDoList} 
          options={{ title: 'ToDoList' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
