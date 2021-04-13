import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import TrackingItemForm from './../Shared/TrackingItemForm'

const TrackingItemCreate = (props) => {
  const { user, msgAlert, location } = props
  const lifeSection = location.aboutProps.lifeSection.lifeSection

  const [trackingItem, setTrackingItem] = useState({
    name: '',
    date: '',
    startTime: '',
    endTime: ''
  })
  const [duration, setDuration] = useState({
    duration: 0
  })

  const [trackingItemId, setTrackingItemId] = useState(null)

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedTrackingItem = Object.assign({}, trackingItem, updatedField)
    setTrackingItem(editedTrackingItem)
    // TODO: Need to work on this logic
    const calculateTime = trackingItem.endTime - trackingItem.startTime
    setDuration(calculateTime)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/${lifeSection._id}/trackingItems`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: {
        trackingItem,
        duration
      }
    })
      .then(res => setTrackingItemId(res.data.trackingItem._id))
      .then(() => msgAlert({
        heading: 'Successfully created tracking item',
        variant: 'success'
      }))
      .catch(error => {
        setTrackingItem({
          name: '',
          date: '',
          startTime: '',
          endTime: '',
          duration: ''
        })
        msgAlert({
          heading: 'Failed to create tracking item ' + error.message,
          variant: 'danger'
        })
      })
  }

  if (trackingItemId) {
    return <Redirect to={'/homePage'} />
  }

  return (
    <div>
      <TrackingItemForm
        lifeSection={lifeSection}
        trackingItem={trackingItem}
        handleChange={handleChange}
        handelSubmit={handleSubmit}
        cancelPath='/homePage'
      />
    </div>
  )
}

export default TrackingItemCreate
