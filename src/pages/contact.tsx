// src/pages/contact.tsx

import Head from 'next/head';
import Layout from '../components/Layout';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact" />
      </Head>
      <section className={styles.contact}>
        <h1>Contact</h1>
        <p>If you want to get in touch, feel free to reach out to me via email at naoydo(a)gmail.com.</p>
      </section>
    </Layout>
  );
};

export default Contact;
