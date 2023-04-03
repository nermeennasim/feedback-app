import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import {useState} from 'react'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Card from './components/shared/Card'
import AboutIconLink from './components/AboutIconLink'

import FeedbackForm from './components/FeedbackForm'

function App(){
   const [feedback,setFeedback] = useState(FeedbackData);

   //define addFeedback
   const addFeedback = (newFeedback)=>{
    //create new id
    newFeedback.id = uuidv4()
    //set feedback empty array
    setFeedback([newFeedback, ...feedback])
    //now we call spread operator
    

        console.log(newFeedback)

   }
   //define function deleteFeeback
   const deleteFeeback = (id)=>{
   if(window.confirm('Are you sure you want to delete?')){

        setFeedback(feedback.filter((item)=>item.id!== id))
   }
}
    return (
            <>
          <Router>
            <Header  />
                
            <div className='container'>
            <Routes>
           
              
                        <Route exact path='/' element=                        
                        {
                            <>
                             < FeedbackForm handleAdd={addFeedback}/>
                                <FeedbackStats feedback={feedback}/>
                                <FeedbackList feedback={feedback} handleDelete={deleteFeeback}/>
                               
                            </>


                        }>

                        </Route>
                                             
                        
                                               
                        <Route  path='/about'element={<AboutPage/>}/>
                       
                </Routes>
                <Card>
                    <NavLink to='/' activeClassName="active">
                        Home

                    </NavLink>
                     <NavLink to='/about' activeClassName="active">
                        About

                    </NavLink>

                </Card>
              
                <AboutIconLink/>
                </div>
                </Router>
            </>
    )

}

export default App