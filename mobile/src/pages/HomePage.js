import React from 'react';
import { TextInput, Text, Button, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default Homepage = () => {
    return (
        <SafeAreaView style={ styles.safeArea }>
            <Text style={ styles.header }>Bem-vindo,</Text>
            <Text style={ styles.subtitle }>Informe seus dados para acessar o bicicletário.</Text>
            <Text style={ styles.label }>Matrícula UFSC:</Text>
            <TextInput style={ styles.input }/>
            <Text style={ styles.label }>Senha:</Text>
            <TextInput style={ styles.input }/>
            <Button title="Entrar" style={ styles.cta }/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#ffcb11',
        flexGrow: 1
    },
    header: {
        fontSize: 24,
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: 16
    },
    label: {
        fontSize: 18
    },
    input: {
        backgroundColor: '#fff',
        padding: '10px 50px'
    },
    cta: {
        backgroundColor: '#2364aa',
        padding: '20px 35px'
    }
})