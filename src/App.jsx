import React from 'react'
import Activity from './components/Activity'
import User from './components/User'
import './App.css'
import data from '/data.json'

const App = () => {

//console.log(data)

const activityElements = data.map((data, index) => <Activity 
  key={index}
  title={data.title}
  dailyCurrent={data.timeframes.daily.current}
  dailyPrevious={data.timeframes.daily.previous}
  weeklyCurrent={data.timeframes.weekly.current}
  weeklyPrevious={data.timeframes.weekly.previous}
  monthlyCurrent={data.timeframes.monthly.current}
  montlyPrevious={data.timeframes.monthly.previous}
   />)

  return (
    <div className='app--container'>
      <User />
      {activityElements}
    </div>
  )
}

export default App
