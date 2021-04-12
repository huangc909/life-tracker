import React from 'react'
import { Link } from 'react-router-dom'

const LifeSectionOptions = (props) => {
  const lifeSectionButtons = (
    <div>
      <button>Finance</button>
      <button>Exercise</button>
      <button>Work</button>
      <button>Productivity</button>
      <button>Spending</button>
      <button>Food</button>
      <button>Hobbies</button>
      <button>Sleep</button>
    </div>
  )

  return (
    <div>
      <p>Start keeping track of things you&apos;re spending time on in your life</p>
      <div>{lifeSectionButtons}</div>
      <Link to='/createLifeSection'>
        <button>Create New</button>
      </Link>
    </div>
  )
}

export default LifeSectionOptions
