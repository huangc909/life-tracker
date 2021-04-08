import React, { useState, useEffect } from 'react'

import axios from 'axios'
import apiUrl from './../../apiConfig'

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
  const lifeSectionJsx = lifeSections.map(lifeSection => (
    <div key={lifeSection._id}>
      <button>
        <p>{lifeSection.name}</p>
      </button>
    </div>
  ))
  const startOptions = () => {
    if (lifeSections.length === 0) {
      return true
    }
  }

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
      <h1>Life Tracker</h1>
      <p>Start keeping track of things you&apos;re spending time on in your life</p>
      <div>{loading ? <p>Loading...</p> : lifeSectionJsx}</div>
      <div>{startOptions ? lifeSectionButtons : <div></div>}</div>
      <button>Create New</button>
    </div>
  )
}

export default HomePage
