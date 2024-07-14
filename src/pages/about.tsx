// src/pages/about.tsx

import Head from 'next/head';
import Layout from '../components/Layout';
import SkillGauge from '../components/SkillGauge';
import styles from '../styles/About.module.css';

const About = () => {
  const frontendSkills = [
    { skill: 'JavaScript', percentage: 90 },
    { skill: 'TypeScript', percentage: 85 },
    { skill: 'React', percentage: 80 },
  ];

  const backendSkills = [
    { skill: 'Laravel (PHP)', percentage: 75 },
    { skill: 'Spring Boot (Java)', percentage: 80 },
    { skill: 'SQL', percentage: 80 },
    { skill: 'NoSQL', percentage: 70 },
    { skill: 'Python', percentage: 90 },
  ];

  const devopsSkills = [
    { skill: 'AWS', percentage: 90 },
    { skill: 'Docker', percentage: 85 },
    { skill: 'Kubernetes', percentage: 80 },
    { skill: 'Jenkins', percentage: 75 },
    { skill: 'Bash', percentage: 80 },
  ];

  const otherSkills = [
    { skill: 'TensorFlow', percentage: 70 },
    { skill: 'C', percentage: 60 },
    { skill: 'C++', percentage: 65 },
  ];

  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me" />
      </Head>
      <section className={styles.about}>
        <h1>About Me</h1>
        <p>I'm a software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.</p>

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
