import React from 'react';
import { Projects } from './Projects';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Projects[];
}

function ProjectList ({ projects }: ProjectListProps) {
    const items = projects.map(project => (
      <div key={project.id} className="colssm">
      <div className="card">
      <img src={project.imageUrl} alt={project.name} />
       <section className="section dark">
         <h5 className="strong">
           <strong>{project.name}</strong>
         </h5>
         <p>{project.description}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
       </section>
     </div>
      <ProjectCard project={project}></ProjectCard>
      </div>
    ));
    return <div className="row">{items}</div>;

}

export default ProjectList;