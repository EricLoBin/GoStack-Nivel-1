import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

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
            <SafeAreaView style={styles.container} >
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project} >{project.title}</Text>
                    )}
                />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        flex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
    project: {
        color: '#fff',
        fontSize: 30,
    },
});