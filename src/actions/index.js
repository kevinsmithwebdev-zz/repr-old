const addRep = (rep) => {
  return {
    type: 'ADD_REP',
    payload: { rep } 
  }
}

const deleteRep = (repId) => {
  return {
    type: 'DELETE_REP',
    payload: { id: repId }
  }
}

const resetRep = (repId) => {
  return {
    type: 'RESET_REP',
    payload: { id: repId }
  }
}

const changeSorter = (key) => {
  return {
    type: 'CHANGE_SORTER',
    payload: { key }
  }
}

export {addRep, deleteRep, resetRep, changeSorter}
