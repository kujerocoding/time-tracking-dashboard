import React from 'react'

const Activity = (props) => {
  return (
    <div className='activity--container'>
        <div className='activity--icon--container'>
            <img src="./src/assets/images/icon-work.svg" alt="suitcase icon" />
        </div>
        <div className='activity--details--container'>
            <div>
                <p className='activity--title'>{props.title}</p>
                <p className='activity--hour'>{props.dailyCurrent}</p>
            </div>
            <div>
                <img src="./src/assets/images/icon-ellipsis.svg" alt="Ellipsis icon" />
                <p className='activity--previous--hour'>Last Week - {props.dailyPrevious}hrs</p>
            </div>
        </div>
    </div>
  )
}

export default Activity
