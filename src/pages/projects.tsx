// src/pages/projects.tsx

import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
      </Head>
      <section className={styles.projects}>
        <h1>Projects</h1>
        <ul>
          <li>Project 1: Description</li>
          <li>Project 2: Description</li>
          <li>Project 3: Description</li>
        </ul>
      </section>
    </Layout>
  );
};

export default Projects;
