import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

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
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            owner: 'Eric'
        });

        const project = response.data;

        setProjects([...projects, project]);
    }


    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#4F379F" />

            <SafeAreaView style={styles.container} >
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project} >{project.title}</Text>
                    )}
                />
        
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.button}
                    onPress={handleAddProject}
                >
                    <Text style={styles.buttonText}>Adicionar projeto</Text>
                </TouchableOpacity>

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
    button: {
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});