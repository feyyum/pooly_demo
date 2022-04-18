import React from 'react'

import { StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

const Stack = createStackNavigator()

// Import Pages
import Greeting from './src/pages/Greeting'
import Form from './src/pages/Form'
import Travel from './src/pages/Travel/Travel'

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ 
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
        <Stack.Screen name='Greeting' component={Greeting} />
        <Stack.Screen name='Form' component={Form} />
        <Stack.Screen name='Travel' component={Travel} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App