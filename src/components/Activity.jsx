import React from 'react'

const Activity = (props) => {

    let imgURL;
    
    switch(props.title){
        case 'Work':
            imgURL = 'icon-work.svg';
            break;
        case 'Play':
            imgURL = 'icon-play.svg';
            break;
        case 'Study':
            imgURL = 'icon-study.svg';
            break;
        case 'Exercise':
            imgURL = 'icon-exercise.svg';
            break;
        case 'Social':
            imgURL = 'icon-social.svg';
            break;
        case 'Self Care':
            imgURL = 'icon-self-care.svg';
        default:
    }

  return (
    <div className='activity--container'>
        <div className='activity--icon--container'>
            <img src={`./src/assets/images/${imgURL}`} alt="suitcase icon" />
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
