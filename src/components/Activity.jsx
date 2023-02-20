import React from 'react'

const Activity = () => {
  return (
    <div className='activity--container'>
        <div className='activity--icon--container'>
            <img src="./src/assets/images/icon-work.svg" alt="suitcase icon" />
        </div>
        <div>
            <p>Work</p>
            <p>32hrs</p>
            <img src="./src/assets/images/icon-ellipsis.svg" alt="Ellipsis icon" />
            <p>Last Week - 8hrs</p>
        </div>
    </div>
  )
}

export default Activity
