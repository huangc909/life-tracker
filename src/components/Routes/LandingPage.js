import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h2>Life Tracker</h2>
      <div style={{ width: '275px' }}>
        <p>Track stuff that happens in your life <br /> to get a breakdown of what you&apos;re spending time doing</p>
      </div>
      <br />
      <Link to={'/sign-up'}>
        <button style={{ borderRadius: '10px', width: '300px' }}>Create Account</button>
      </Link>
      <Link to={'/sign-in'}>
        <button style={{ borderRadius: '10px', width: '300px' }}>Sign In</button>
      </Link>
    </div>
  )
}

export default LandingPage
