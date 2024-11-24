import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Skill {
  skill: string;
  percentage: number;
}

interface SkillsState {
  frontend: Skill[];
  backend: Skill[];
  devops: Skill[];
  other: Skill[];
}

const initialState: SkillsState = {
  frontend: [
    { skill: 'JavaScript', percentage: 90 },
    { skill: 'TypeScript', percentage: 85 },
    { skill: 'Next.js/React', percentage: 80 },
  ],
  backend: [
    { skill: 'Laravel/PHP', percentage: 75 },
    { skill: 'Spring Boot/Java', percentage: 80 },
    { skill: 'FastAPI/Python', percentage: 90 },
    { skill: 'SQL', percentage: 80 },
    { skill: 'NoSQL', percentage: 70 },
  ],
  devops: [
    { skill: 'AWS', percentage: 90 },
    { skill: 'GCP', percentage: 90 },
    { skill: 'Docker', percentage: 85 },
    { skill: 'Kubernetes', percentage: 80 },
    { skill: 'Git', percentage: 80 },
    { skill: 'Jenkins', percentage: 75 },
    { skill: 'Bash', percentage: 80 },
  ],
  other: [
    { skill: 'ElasticStack', percentage: 65 },
    { skill: 'Redis', percentage: 65 },
    { skill: 'REST API', percentage: 65 },
    { skill: 'GraphQL API', percentage: 65 },
  ],
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
});

export default skillsSlice.reducer;
