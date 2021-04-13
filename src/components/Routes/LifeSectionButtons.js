import React from 'react'

import { Link } from 'react-router-dom'

const LifeSectionButtons = (props) => {
  const { lifeSections } = props

  const lifeSectionJsx = lifeSections.map(lifeSection => (
    <div key={lifeSection._id}>
      <button>
        <p>{lifeSection.name}</p>
      </button>
    </div>
  ))

  return (
    <div>
      { lifeSectionJsx }
      <Link to='/createLifeSection'>
        <button>Create New</button>
      </Link>
    </div>
  )
}

export default LifeSectionButtons
