import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

/**
 * Todos componentes possuem display: flex por padrão
 * 
 * View: div, footer, header, main, aside, section (containers)
 * Text: serve para qualquer tipo de texto
 */

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, [])


    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container}>
                {projects.map(project => <Text key={project.id}>{project.title}</Text>)}
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