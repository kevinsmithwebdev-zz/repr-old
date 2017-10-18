import {combineReducers} from 'redux'

//*************

const repsReducer = (state = [], action) => {
  switch (action.type) {

    case 'ADD_REP':
      let newId = (state.length) ? (Math.max.apply(Math, state.map(function(rep) {return rep.id})) + 1) : 0

      return [
        ...state,
        {
          id: newId,
          name: action.payload.rep.name,
          category: action.payload.rep.category,
          tCode: action.payload.rep.tCode
        }
      ]

    case 'DELETE_REP':
      let index = state.findIndex(function(rep) {
        return rep.id === action.payload.id
      })
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]

    case 'RESET_REP':
      return state.map(rep => {
        if (rep.id !== action.payload.id)
          return rep
        else
          return Object.assign({}, rep, {
            tCode: (new Date()).getTime()
          })
      })

    default:
      return state
  }
}

//*************

const sorterReducer = (state = [], action) => {
  switch (action.type) {

    case 'CHANGE_SORTER':
      let newSorter = action.payload
      if (state.hasOwnProperty('isUp')){
        if (newSorter.key === state.key)
          newSorter.isUp = !state.isUp
        else
          newSorter.isUp = state.isUp
      } else {
        newSorter.isUp = false
      }

      return newSorter

    default:
      return state
  }
}

//*************

const reducers = combineReducers({
  reps: repsReducer,
  sorter: sorterReducer
})

export default reducers
