import './App.css'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Details from './Pages/Details'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/details/:mealId' Component={Details}/>
      </Routes>
    </>
  )
}

export default App
