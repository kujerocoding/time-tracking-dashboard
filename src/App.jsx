import React from 'react'
import Activity from './components/Activity'
import User from './components/User'
import './App.css'

const App = () => {
  return (
    <div className='app--container'>
      <User />
      <Activity />
    </div>
  )
}

export default App
