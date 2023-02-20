import React from 'react'

const Activity = () => {
  return (
    <div className='activity--container'>
        <div className='activity--icon--container'>
            <img src="./src/assets/images/icon-work.svg" alt="suitcase icon" />
        </div>
        <div className='activity--details--container'>
            <div>
                <p className='activity--title'>Work</p>
                <p className='activity--hour'>32hrs</p>
            </div>
            <div>
                <img src="./src/assets/images/icon-ellipsis.svg" alt="Ellipsis icon" />
                <p className='activity--previous--hour'>Last Week - 8hrs</p>
            </div>
        </div>
    </div>
  )
}

export default Activity
