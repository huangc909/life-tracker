import React from 'react'
import { Link } from 'react-router-dom'

const TrackingItemForm = ({ lifeSection, trackingItem, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <h1>Track {lifeSection.name}</h1>
    <label>Which {lifeSection.name} item did you spend time on</label>
    <div>
      <input
        value={trackingItem.name}
        name="name"
        onChange={handleChange}
        autoFocus
      />
    </div>
    <br />
    <label>Date</label>
    <div>
      <input
        value={trackingItem.date}
        name="date"
        onChange={handleChange}
        autoFocus
      />
    </div>
    <br />
    <label>When did you start</label>
    <div>
      <input
        placeholder="12:00 PM"
        value={trackingItem.startTime}
        name="startTime"
        onChange={handleChange}
      />
    </div>
    <br />
    <label>When did you end</label>
    <div>
      <input
        placeholder="1:00 PM"
        value={trackingItem.endTime}
        name="endTime"
        onChange={handleChange}
      />
    </div>
    <br />
    <button type="submit">Track {lifeSection.name}</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default TrackingItemForm
