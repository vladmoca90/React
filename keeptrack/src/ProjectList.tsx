import React from 'react';
import { Projects } from './Projects';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Projects[];
}

function ProjectList ({ projects }: ProjectListProps) {
    const items = projects.map(project => (
      <div key={project.id} className="colssm">
        <ProjectCard project={project}></ProjectCard>
      </div>
    ));
    return <div className="row">{items}</div>;

}

export default ProjectList;