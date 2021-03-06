import React, { useState } from 'react';

import { Project } from './Project';
import { Container } from './styles';

export function Projects() {
  const [projects, setProjects] = useState([
    {
      id: Math.random(),
      title: 'Alerta de queimadas',
      description:
        'Este projeto é o tema do meu TCC. Nele eu estou desenvolvendo uma arquitetura de microserviços orientada a eventos para a emissão de alertas sobre queimadas.',
      link: 'https://github.com/JoaoPedroLuz57/alertas-de-queimadas',
      status: 'Em desenvolvimento',
      likes: 0,
    },
    {
      id: Math.random(),
      title: 'MyContacts',
      description:
        'App para salvar contatos. Eu criei uma API com Node.js e postgres (container no Docker) para salvar as informacões dos contatos e poder passá-las para o front-end que utiliza React JS',
      link: 'https://github.com/JoaoPedroLuz57/my-contacts',
      status: 'Em desenvolvimento',
      likes: 0,
    },
    {
      id: Math.random(),
      title: 'App de restaurante',
      description:
        'App, utilizando spring boot e ionic, de um restaurante onde é possível visualizar o menu e realizar pedidos para receber em casa.',
      link: '',
      status: 'A fazer',
      likes: 0,
    },
  ]);

  function handleLike(projectId) {
    setProjects(prevState =>
      prevState.map(project =>
        project.id === projectId
          ? { ...project, likes: project.likes + 1 }
          : project
      )
    );
  }

  return (
    <Container>
      {projects.map(project => (
        <Project key={project.id} project={project} onLike={handleLike} />
      ))}
    </Container>
  );
}
