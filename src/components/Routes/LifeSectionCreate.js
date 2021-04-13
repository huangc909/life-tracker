import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import LifeSectionForm from './../Shared/LifeSectionForm'

const LifeSectionCreate = props => {
  const { user, msgAlert } = props
  const [lifeSection, setLifeSection] = useState({
    name: ''
  })
  const [lifeSectionId, setLifeSectionId] = useState(null)

  const handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }
    const editedLifeSection = Object.assign({}, lifeSection, updatedField)
    setLifeSection(editedLifeSection)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/lifeSections`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
      data: { lifeSection }
    })
      .then(res => setLifeSectionId(res.data.lifeSection._id))
      .then(() => msgAlert({
        heading: 'Successfully created life section',
        variant: 'success'
      }))
      .catch(error => {
        setLifeSection({ name: '' })
        msgAlert({
          heading: 'Failed to create life section ' + error.message,
          variant: 'danger'
        })
      })
  }

  if (lifeSectionId) {
    return <Redirect to={'/homePage'} />
  }

  return (
    <div>
      <LifeSectionForm
        lifeSection={lifeSection}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath='/homePage'
      />
    </div>
  )
}

export default LifeSectionCreate
