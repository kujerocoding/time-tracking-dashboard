import React from 'react'

const User = () => {
  return (
    <div className='report--container'>
      <div className='account--container'>
        <img src="/src/assets/images/image-jeremy.png" alt="jeremy profile picture" />
        <p>Report for <span className='account--name'>Jeremy Robson</span></p>
      </div>
      <ul className='periodical--lists'>
        <li>Daily</li>
        <li>Weekly</li>
        <li>Monthly</li>
      </ul>
    </div>
  )
}

export default User
