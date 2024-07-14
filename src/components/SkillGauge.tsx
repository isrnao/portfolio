// src/components/SkillGauge.tsx

import React from 'react';
import styles from '../styles/SkillGauge.module.css';

interface SkillGaugeProps {
  skill: string;
  percentage: number;
}

const SkillGauge: React.FC<SkillGaugeProps> = ({ skill, percentage }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillName}>{skill}</div>
      <div className={styles.gauge}>
        <div
          className={styles.percentage}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className={styles.percentageLabel}>{percentage}%</div>
    </div>
  );
};

export default SkillGauge;
