import React from 'react'
import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


const WorkoutForm = () => {
    const {dispatch} = useWorkoutsContext('')
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e)=> {
        e.prevendDefault()

        const workout = {title, load, reps}

        const res = await fetch('/api/worrkouts', {
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await res.json()

        if(!res.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(res.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }


    return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>add a new workout</h3>

        <label>Excersize title:</label>
        <input type="text"
            onChange={(e)=> setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
        />
        <label>Load (in kg):</label>
        <input type="number"
            onChange={(e)=> setLoad(e.target.value)}
            value={load}
            className={emptyFields.includes('load') ? 'error' : ''}
            />
        
        <label>Reps:</label>
        <input type="number"
            onChange={(e)=> setReps(e.target.value)}
            value={reps}
            className={emptyFields.includes('reps') ? 'error' : ''}
            />
        
        <button>Add workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm