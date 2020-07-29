import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const AppStack = createStackNavigator();

export default Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="homepage" component={HomePage} />
                <AppStack.Screen name="about" component={AboutPage} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}