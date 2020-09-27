import { SETTASKS, SETAREAS } from './actionTypes';

export const setTasks = (tasks) => ({
  type: SETTASKS,
  payload: {
    tasks: tasks
  }
})


export const setAreas = (areas) => ({
  type: SETAREAS,
  payload: {
    areas: areas
  }
})