import React, { useState, useEffect } from 'react'

import axios from 'axios'
import apiUrl from './../../apiConfig'

import HomePageDisplay from './HomePageDisplay'

const HomePage = (props) => {
  const { msgAlert, user } = props
  const [lifeSections, setLifeSections] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios({
      url: `${apiUrl}/lifeSections`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
      .then(res => {
        setLifeSections(res.data.lifeSections)
        setLoading(false)
      })
      .then(() => msgAlert({
        heading: 'Showing all Life Sections',
        variant: 'success'
      }))
      .catch(error => {
        setLifeSections([])
        msgAlert({
          heading: 'Failed to show all life sections' + error.message,
          variant: 'danger'
        })
      })
  }, [])
  console.log(lifeSections)

  return (
    <div>
      <h1>My Life Tracker</h1>
      <div>{ loading ? <p>Loading...</p> : <HomePageDisplay lifeSections={lifeSections} /> }</div>
    </div>
  )
}

export default HomePage
