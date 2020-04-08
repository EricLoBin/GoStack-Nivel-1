import React from 'react';

import Header from './components/Header';

function App() {
    const projects = ['Desenvolvimento de app', 'Front-end web'];

    function handleAddProject() {
        projects.push(`Novo projeto ${Date.now()}`)

        console.log('Project');
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