import React from 'react'
import { Link } from 'react-router-dom'

const LifeSectionForm = ({ lifeSection, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <h1>Life Section</h1>
    <label>Name</label>
    <div>
      <input
        placeholder="Finance"
        value={lifeSection.name}
        name="name"
        onChange={handleChange}
        autoFocus
      />
    </div>
    <br />
    <button type="submit">Add Life Section</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default LifeSectionForm
