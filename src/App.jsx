import NavBar from './Components/displayComponents/NavBar'
import RouterController from './Components/navigation/RouterController'
import SiteMap from './Components/displayComponents/SiteMap'
import AppProvider from './Components/contextComponents/AppContext';

const  App = () => {
  return (
    <AppProvider>
      <NavBar/>
      <RouterController />
      <SiteMap/>
    </AppProvider>
  )
}

export default App