import React, { useState } from 'react';

import './App.css';

import Header from './components/Header';

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

    /**
     * useState retorna uma array com 2 posições
     * 
     * 1. Variavel com o valor inicial
     * 2. função para atualizar valor
     */

    function handleAddProject() {
        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }

    return (
    <>
        <Header title="Projects" />
        
        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
    );
}

export default App;