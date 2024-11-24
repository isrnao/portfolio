import Head from 'next/head';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Layout, SkillGauge } from '../components';
import styles from '../styles/About.module.css';

const About = () => {
  const frontendSkills = useSelector((state: RootState) => state.skills.frontend);
  const backendSkills = useSelector((state: RootState) => state.skills.backend);
  const devopsSkills = useSelector((state: RootState) => state.skills.devops);
  const otherSkills = useSelector((state: RootState) => state.skills.other);

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
