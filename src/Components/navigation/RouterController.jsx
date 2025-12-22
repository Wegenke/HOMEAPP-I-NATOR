import {Routes, Route} from 'react-router-dom'
import AdminForms from '../formComponents/AdminForms'
import Animals from '../dataComponents/Animals'
import Plants from '../dataComponents/Plants'
import Chores from '../dataComponents/Chores'
import Humans from '../dataComponents/Humans'
import Home from '../displayComponents/Home'
import Lists from '../dataComponents/Lists/Lists'


const RouterController = () => {
  return (
    <div id='routercontroller'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin-forms' element={<AdminForms/>} />
        <Route path='/all-chores' element={<Chores />}/>
        <Route path='/all-humans' element={<Humans />}/>
        <Route path='/all-plants' element={<Plants />}/>
        <Route path='/all-animals' element={<Animals />}/>
        <Route path='/lists' element={<Lists />} />
      </Routes>
    </div>
  )
}

export default RouterController