// src/pages/about.tsx

import Head from 'next/head';
import Layout from '../components/Layout';
import SkillGauge from '../components/SkillGauge';
import styles from '../styles/About.module.css';

const About = () => {
  const frontendSkills = [
    { skill: 'JavaScript', percentage: 90 },
    { skill: 'TypeScript', percentage: 85 },
    { skill: 'Next.js/React', percentage: 80 },
  ];

  const backendSkills = [
    { skill: 'Laravel/PHP', percentage: 75 },
    { skill: 'Spring Boot/Java', percentage: 80 },
    { skill: 'FastAPI/Python', percentage: 90 },
    { skill: 'SQL', percentage: 80 },
    { skill: 'NoSQL', percentage: 70 },
  ];

  const devopsSkills = [
    { skill: 'AWS', percentage: 90 },
    { skill: 'GCP', percentage: 90 },
    { skill: 'Docker', percentage: 85 },
    { skill: 'Kubernetes', percentage: 80 },
    { skill: 'Git', percentage: 80 },
    { skill: 'Jenkins', percentage: 75 },
    { skill: 'Bash', percentage: 80 },
  ];

  const otherSkills = [
    { skill: 'ElasticStack', percentage: 65 },
    { skill: 'Redis', percentage: 65 },
    { skill: 'REST API', percentage: 65 },
    { skill: 'GraphQL API', percentage: 65 },
    { skill: 'GraphQL API', percentage: 65 },
  ];

  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me" />
      </Head>
      <section className={styles.about}>
        <h1>About Me</h1>
        <p>ソフトウェアエンジニアとして、組織の効率と効果を向上させる革新的なプログラムの開発に情熱を注いでいます。技術に精通しており、信頼性とユーザーフレンドリーなシステムを作成するためのコードを書くことが得意です。</p>

        <div className={styles.skillsCategory}>
          <h3>Frontend Skills</h3>
          <div className={styles.skillsList}>
            {frontendSkills.map((skillData) => (
              <SkillGauge
                key={skillData.skill}
                skill={skillData.skill}
                percentage={skillData.percentage}
              />
            ))}
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <h3>Backend Skills</h3>
          <div className={styles.skillsList}>
            {backendSkills.map((skillData) => (
              <SkillGauge
                key={skillData.skill}
                skill={skillData.skill}
                percentage={skillData.percentage}
              />
            ))}
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <h3>DevOps Skills</h3>
          <div className={styles.skillsList}>
            {devopsSkills.map((skillData) => (
              <SkillGauge
                key={skillData.skill}
                skill={skillData.skill}
                percentage={skillData.percentage}
              />
            ))}
          </div>
        </div>

        <div className={styles.skillsCategory}>
          <h3>Other Skills</h3>
          <div className={styles.skillsList}>
            {otherSkills.map((skillData) => (
              <SkillGauge
                key={skillData.skill}
                skill={skillData.skill}
                percentage={skillData.percentage}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
