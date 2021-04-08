import React from 'react'
import { Redirect } from 'react-router-dom'
import { finance, exercise, work, productivity, spending, food, hobbies, sleep } from '../../api/defaultLifeSections'

const DefaultLifeSections = (props) => {
  const { user, msgAlert } = props

  finance(user)
    .then(() => msgAlert({
      heading: 'Default Life Sections Set'
    }))
    .catch(error => console.log(error))

  exercise(user)
    .then(() => msgAlert({
      heading: 'Default Life Sections Set'
    }))
    .catch(error => console.log(error))

  work(user)
    .then(() => msgAlert({
      heading: 'Default Life Sections Set'
    }))
    .catch(error => console.log(error))

  productivity(user)
    .then(() => msgAlert({
      heading: 'Default Life Sections Set'
    }))
    .catch(error => console.log(error))

  spending(user)
    .then(() => msgAlert({
      heading: 'Default Life Sections Set'
    }))
    .catch(error => console.log(error))

  food(user)
    .then(() => msgAlert({
      heading: 'Default Life Sections Set'
    }))
    .catch(error => console.log(error))

  hobbies(user)
    .then(() => msgAlert({
      heading: 'Default Life Sections Set'
    }))
    .catch(error => console.log(error))

  sleep(user)
    .then(() => msgAlert({
      heading: 'Default Life Sections Set'
    }))
    .catch(error => console.log(error))

  return (
    <Redirect to={'/homePage'} />
  )
}

export default DefaultLifeSections
