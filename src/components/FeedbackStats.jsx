import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {

    //calculate ratings Average
    let average = feedback.reduce((acc,current)=>{
        return acc+ current.rating

    },0) / feedback.length

    console.log(average);
    //fixed one digit and replace trailing zeros
    average = average.toFixed(1).replace(/[.,]0$/, '')
    //2nd arugment is zero in reduce function so that we are initializing with zero
  return (
    <div className='feedback-stats' >
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: { isNaN(average) ? 0: average} </h4>
    </div>
  )
}

FeedbackStats.propTypes={
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats
