import React from 'react'

const User = (props) => {
  return (
    <div className='report--container'>
      <div className='account--container'>
        <img src="/src/assets/images/image-jeremy.png" alt="jeremy profile picture" />
        <p>Report for <span className='account--name'>Jeremy Robson</span></p>
      </div>
      <ul className='periodical--lists'>
        <li id="Daily" onClick={props.handleClick}>Daily</li>
        <li id="Weekly" onClick={props.handleClick}>Weekly</li>
        <li id="Monthly" onClick={props.handleClick}>Monthly</li>
      </ul>
    </div>
  )
}

export default User
