import React from 'react'
import { WorkoutsContext } from '../context/WorkoutsContext'
import { useContext } from 'react'

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)
    
    if(!context){
        throw Error('useWorkoiutsContext musg be used an workoutsContextProvider')
    }    
    
    return context
}




