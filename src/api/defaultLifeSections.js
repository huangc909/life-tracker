import apiUrl from '../apiConfig'
import axios from 'axios'

export const finance = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/defaultLifeSections',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      lifeSection: {
        name: 'Finance'
      }
    }
  })
}

export const exercise = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/defaultLifeSections',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      lifeSection: {
        name: 'Exercise'
      }
    }
  })
}

export const work = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/defaultLifeSections',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      lifeSection: {
        name: 'Work'
      }
    }
  })
}

export const productivity = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/defaultLifeSections',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      lifeSection: {
        name: 'Productivity'
      }
    }
  })
}

export const spending = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/defaultLifeSections',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      lifeSection: {
        name: 'Spending'
      }
    }
  })
}

export const food = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/defaultLifeSections',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      lifeSection: {
        name: 'Food'
      }
    }
  })
}

export const hobbies = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/defaultLifeSections',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      lifeSection: {
        name: 'Hobbies'
      }
    }
  })
}

export const sleep = (user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/defaultLifeSections',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      lifeSection: {
        name: 'Sleep'
      }
    }
  })
}
