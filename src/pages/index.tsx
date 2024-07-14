// src/pages/index.tsx

import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.hero}>
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a Software Engineer specializing in building exceptional digital experiences.</p>
      </section>
    </Layout>
  );
};

export default Home;
