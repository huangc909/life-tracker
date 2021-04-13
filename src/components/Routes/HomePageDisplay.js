import React, { useState } from 'react'

const HomePageDisplay = (props) => {
  const { lifeSections } = props

  const [trackingItem, setTrackingItem] = useState(false)

  const check = lifeSections.find(lifeSection => lifeSection.trackingItems.length > 0)

  console.log(check)
  if (check !== undefined) {
    setTrackingItem(true)
  }

  return (
    <div>
      { trackingItem ? <p>Yes there are trackingItems here</p> : <div>Checking</div> }
    </div>
  )
}

export default HomePageDisplay
