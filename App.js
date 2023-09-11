import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './src/Screen/Homepage';
import GallaryPage from './src/Screen/GallaryPage';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';
import Photo from './src/Screen/Photo';

const Stack = createStackNavigator();


function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Gallary" component={GallaryPage} />
        
        <Stack.Screen name="Photo" component={Photo} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
