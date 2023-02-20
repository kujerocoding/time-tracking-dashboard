import React from 'react'
import Activity from './components/Activity'
import User from './components/User'
import './App.css'
import data from '/data.json'
import { useState } from 'react'

const App = () => {

const [timeframe, setTimeframe] = useState('Daily')

function showTimeframe(e){
setTimeframe(e.target.id)
}

const activityElements = data.map((data, index) => <Activity 
  key={index}
  title={data.title}
  dailyCurrent={data.timeframes.daily.current}
  dailyPrevious={data.timeframes.daily.previous}
  weeklyCurrent={data.timeframes.weekly.current}
  weeklyPrevious={data.timeframes.weekly.previous}
  monthlyCurrent={data.timeframes.monthly.current}
  monthlyPrevious={data.timeframes.monthly.previous}
  timeframe={timeframe}
   />)

  return (
    <div className='app--container'>
      <User handleClick={showTimeframe}/>
      {activityElements}
      <div className='attribution'>
            Challenge by <a href="https://www.frontendmentor.io/challenges" target="_blank">Frontend Mentor.</a> Coded by <a href='https://github.com/kujerocoding' target="_blank">kujerocoding</a>
      </div>
    </div>
  )
}

export default App
