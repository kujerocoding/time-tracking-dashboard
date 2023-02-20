import React from 'react'

const Activity = (props) => {

    let imgURL;
    let iconBG;

    switch(props.title){
        case 'Work':
            imgURL = 'icon-work.svg';
            iconBG = 'hsl(15, 100%, 70%)';
            break;
        case 'Play':
            imgURL = 'icon-play.svg';
            iconBG = 'hsl(195, 74%, 62%)';
            break;
        case 'Study':
            imgURL = 'icon-study.svg';
            iconBG = 'hsl(348, 100%, 68%)';
            break;
        case 'Exercise':
            imgURL = 'icon-exercise.svg';
            iconBG = 'hsl(145, 58%, 55%)';
            break;
        case 'Social':
            imgURL = 'icon-social.svg';
            iconBG = 'hsl(264, 64%, 52%)';
            break;
        case 'Self Care':
            imgURL = 'icon-self-care.svg';
            iconBG = 'hsl(43, 84%, 65%)';
        default:
    }

const iconBGStyle = {
    backgroundColor : iconBG
}

let currentTimeframe;
let previousTimeframe;

switch(props.timeframe){
    case 'Daily':
        currentTimeframe = props.dailyCurrent;
        previousTimeframe = props.dailyPrevious;
        break;
    case 'Weekly':
        currentTimeframe = props.weeklyCurrent;
        previousTimeframe = props.weeklyPrevious;
        break;
    case 'Monthly':
        currentTimeframe = props.monthlyCurrent;
        previousTimeframe = props.monthlyPrevious;
        break;
    default:
}

  return (
    <div className='activity--container'>
        <div className='activity--icon--container' style={iconBGStyle}>
            <img src={`./src/assets/images/${imgURL}`} alt={props.title} />
        </div>
        <div className='activity--details--container'>
            <div>
                <p className='activity--title'>{props.title}</p>
                <p className='activity--hour'>{currentTimeframe}hrs</p>
            </div>
            <div>
                <img src="./src/assets/images/icon-ellipsis.svg" alt="Ellipsis icon" />
                <p className='activity--previous--hour'>Last {props.timeframe} - {previousTimeframe}hrs</p>
            </div>
        </div>
    </div>
  )
}

export default Activity
