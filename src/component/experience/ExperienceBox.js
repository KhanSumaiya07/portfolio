import React from 'react'

const ExperienceBox = ({expPara,skills}) => {
  return (
    <div>
      <div className='exp-box'>
        <div className='exp-para'>
            <p>{expPara}</p>
        </div>
      </div>
    </div>
  )
}

export default ExperienceBox
