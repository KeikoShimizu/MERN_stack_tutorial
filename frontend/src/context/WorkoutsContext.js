import React from 'react'
import {createContext, useReducer} from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
  switch(action,type){
    case 'SET_WORKOUTS':
      return {
        workouts:action.payload
      }
    case 'CREATE_WORKOUT':
      return {
          workouts: [action.playload, ...state.workouts]
      }  
      default:
        return state
  }
}

export const WorkoutContextprovider = ({children}) => {
    
  const [state, dispatch] = useReducer(workoutsReducer,{
    workouts: null
  })
// dispatch({tyep: 'SET_WORKOUTS', playload:[{},{}]})


    return(
      <WorkoutsContext.Provider value={{...state, dispatch}}>
        {children}
      </WorkoutsContext.Provider>
    )
}
