import React from 'react'
import { useCounterState } from '../stores/counterStore'

const  ComponentE = () => {
    const increaseCount = useCounterState((state) => state.increaseCount)
    const decreaseCount = useCounterState((state) => state.decreaseCount)
  return (
    <div>
        <button onClick = {increaseCount}> Increase </button>
        <button onClick = {decreaseCount}> Decrease</button>

    </div>
  )
}

export default ComponentE