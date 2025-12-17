import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import AdminForms from '../formComponents/AdminForms'
import Animals from '../dataComponents/Animals'
import Plants from '../dataComponents/Plants'
import Chores from '../dataComponents/Chores'
import Humans from '../dataComponents/Humans'
import Home from '../displayComponents/Home'
import Lists from '../dataComponents/Lists'


export default function RouterController(){

  const [humans, setHumans] = useState([])

    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}get/human_ids`)
        .then(res => res.json())
        .then(data => setHumans(data))
    }, [])

  return (
    <div id='routercontroller'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin-forms' element={<AdminForms humanList={humans}/>} />
        <Route path='/all-chores' element={<Chores />}/>
        <Route path='/all-humans' element={<Humans />}/>
        <Route path='/all-plants' element={<Plants />}/>
        <Route path='/all-animals' element={<Animals />}/>
        <Route path='/lists' element={<Lists />} />
      </Routes>
    </div>
  )
}