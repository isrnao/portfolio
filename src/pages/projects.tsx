import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addProject, removeProject } from '../store/projectsSlice';
import { Layout } from '../components';
import withAuth from '../hoc/withAuth';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const projects = useSelector((state: RootState) => state.projects.projects);
  const dispatch = useDispatch();

  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleAddProject = () => {
    dispatch(addProject({ name: projectName, description: projectDescription }));
    setProjectName('');
    setProjectDescription('');
  };

  return (
    <Layout>
      <h1>Projects</h1>
      <div className={styles.projectList}>
        {projects.map(project => (
          <div key={project.id} className={styles.projectItem}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <button onClick={() => dispatch(removeProject(project.id))}>Remove</button>
          </div>
        ))}
      </div>
      <div className={styles.addProject}>
        <h2>Add a New Project</h2>
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
        />
        <textarea
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Project Description"
        />
        <button onClick={handleAddProject}>Add Project</button>
      </div>
    </Layout>
  );
};

export default withAuth(Projects);
