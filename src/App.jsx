import React from 'react'
import Activity from './components/Activity'
import User from './components/User'
import './App.css'
import data from '/data.json'

const App = () => {

console.log(data)

  return (
    <div className='app--container'>
      <User />
      <Activity />
    </div>
  )
}

export default App
