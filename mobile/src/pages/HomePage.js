import React from 'react';
import { Text } from 'react-native';

import { Header } from '../components/Header.js';
import { SafeAreaView } from 'react-native-safe-area-context';

export default Homepage = () => {
    return (
        <SafeAreaView>
            <Header />
            <Text>Homepage</Text>
        </SafeAreaView>
    )
}