import React from 'react'

const JobInfoContainer = ({profile, ComName, position, duration}) => {
  return (
    <div>
      <div className='jobInfo-container'>
        <h4>{profile}</h4>
        <h5>{ComName}</h5>
        <h6>{position}</h6>
        <p>{duration}</p>
      </div>
    </div>
  )
}

export default JobInfoContainer
