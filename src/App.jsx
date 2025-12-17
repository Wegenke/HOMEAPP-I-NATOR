import NavBar from './Components/displayComponents/NavBar'
import RouterController from './Components/navigation/RouterController'
import SiteMap from './Components/displayComponents/SiteMap'
import { useEffect } from 'react'
import AppProvider from './Components/contextComponents/AppContext';


function App() {
  return (
    <AppProvider>
      <NavBar/>
      <RouterController />
      <SiteMap/>
    </AppProvider>
  )
}

export default App
