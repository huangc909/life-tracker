import React from 'react'

import { Link } from 'react-router-dom'

const LifeSectionButtons = (props) => {
  const { lifeSections } = props

  const lifeSectionJsx = lifeSections.map(lifeSection => (
    <div key={lifeSection._id}>
      <Link to={{
        pathname: '/trackingItem-create',
        aboutProps: {
          lifeSection: { lifeSection }
        }
      }}>
        <button>
          <p>{lifeSection.name}</p>
        </button>
      </Link>
    </div>
  ))

  return (
    <div>
      { lifeSectionJsx }
      <Link to='/lifeSection-create'>
        <button>Create New</button>
      </Link>
    </div>
  )
}

export default LifeSectionButtons
