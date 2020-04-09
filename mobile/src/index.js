import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

/**
 * Todos componentes possuem display: flex por padrão
 * 
 * View: div, footer, header, main, aside, section (containers)
 * Text: serve para qualquer tipo de texto
 */

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container}>
                <Text style={styles.title}>Hello GoStack</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
});