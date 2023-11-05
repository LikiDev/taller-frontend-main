import React, { useState } from 'react';
import { Button, Form, Input, ProjectFormContainer, Title } from '../../styles/TextStyles';
import { printProjectData } from '../../utils/mock-response';

interface Project {
  _id?: string;
  title: string;
  description: string;
  version: string;
  link: string;
  tag: string;
  timestamp?: number;
}

const Projects: React.FC = () => {
  const [project, setProject] = useState<Project>({
    title: '',
    description: '',
    version: '',
    link: '',
    tag: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Aquí iría la lógica para añadir el proyecto a la base de datos
    // Por ejemplo, podrías hacer una petición POST a tu API
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...project, timestamp: Date.now() }),
      });

      if (response.ok) {
        console.log('Proyecto añadido con éxito');
        // Aquí podrías limpiar el formulario o manejar la respuesta de alguna otra manera
      } else {
        console.error('Error al añadir proyecto');
      }
    } catch (error) {
      console.error('Error al añadir proyecto', error);
    }
  };

  const handlePostClick = () => {
    // Llama a la función que imprime los datos de los proyectos
    printProjectData();
  };

  
  return (
    <ProjectFormContainer>
      <Title>Project Input</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="title" placeholder="Title" value={project.title} onChange={handleChange} />
        <Input type="text" name="description" placeholder="Description" value={project.description} onChange={handleChange} />
        <Input type="text" name="version" placeholder="Version" value={project.version} onChange={handleChange} />
        <Input type="text" name="link" placeholder="Link" value={project.link} onChange={handleChange} />
        <Input type="text" name="tag" placeholder="Tag" value={project.tag} onChange={handleChange} />
        <Button onClick={handlePostClick}>Post</Button>
        <Button delete type="button" onClick={() => setProject({ title: '', description: '', version: '', link: '', tag: '' })}>Delete</Button>
      </Form>
    </ProjectFormContainer>
  );
};

export default Projects;
