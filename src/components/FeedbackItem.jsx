import React, { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'

function FeedbackItem({item, handleDelete}) {
   // const [rating,setRating] = useState(7);
   // const [text,setText] = useState('This is an example of Feedback item');

    //declaring handleClick function for button
   /* const handleClick=()=>{
        setRating((prev)=>{
            console.log(prev)
            return prev +1
        })

    }*/

    
  return (
    <Card  >
        <div className='num-display'>{item.rating}</div>
        <button onClick={()=>handleDelete(item.id)} className="close">
            <FaTimes cursor='pointer'/>
        </button>
        <div className='text-display'>{item.text}</div>
           
        </Card>
  )
}

FeedbackItem.propTypes = {
    item : PropTypes.object.isRequired,

}

export default FeedbackItem