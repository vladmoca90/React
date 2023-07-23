import React from 'react';
import { MockProjects } from './MockProjects';

function ProjectsPage() {
 return (
      <>
        <h1>Projects</h1>
        <pre>{JSON.stringify(MockProjects, null, ' ')}</pre>
       </>
    )
}

export default ProjectsPage;