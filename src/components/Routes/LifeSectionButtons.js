import React from 'react'

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
      <button>Create New</button>
    </div>
  )
}

export default LifeSectionButtons
