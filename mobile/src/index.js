import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

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
            <FlatList
                style={styles.container}
                data={projects}
                keyExtractor={project => project.id}
                renderItem={({ item: project }) => (
                    <Text style={styles.project} >{project.title}</Text>
                )}
            />

            {/*<StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container}>
                {projects.map(project => <Text style={styles.project} key={project.id}>{project.title}</Text>)}
                <Text style={styles.title}>Hello GoStack</Text>
            </View>*/}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7159c1',
        height: '100%',
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },
    project: {
        color: '#fff',
        fontSize: 120,
    },
});