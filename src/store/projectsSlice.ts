import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Project {
  id: number;
  name: string;
  description: string;
}

interface ProjectsState {
  projects: Project[];
  nextId: number;
}

const initialState: ProjectsState = {
  projects: [
    { id: 1, name: 'Project One', description: 'This is the first project' },
    { id: 2, name: 'Project Two', description: 'This is the second project' },
  ],
  nextId: 3,
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<{ name: string; description: string }>) => {
      const newProject = {
        id: state.nextId,
        name: action.payload.name,
        description: action.payload.description,
      };
      state.projects.push(newProject);
      state.nextId += 1;
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter(project => project.id !== action.payload);
    },
  },
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
