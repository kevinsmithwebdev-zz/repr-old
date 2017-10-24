import { LOCAL_STORAGE_NAME } from '../constants/'

const loadReps = () =>
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME)) || []

const saveReps = (reps) =>
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(reps))

export { loadReps, saveReps }
