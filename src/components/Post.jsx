import React from 'react'
import { useParams } from 'react-router-dom'


function Post() {
    const params = useParams();
  return (
    <>
    <div><h1>This is a Post Page with Id: {params.id}</h1>
    <p>this is Post Name: {params.name}</p>
   
    </div>
    </>
  )
}

export default Post