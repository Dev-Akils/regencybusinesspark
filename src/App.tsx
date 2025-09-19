
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage';
import MasterPlanPage from './pages/MasterPlanPage';
import Gallery from './pages/Gallery';
import ExploreBuildings from './pages/ExploreBuildings';
import Floors from './Towers/Floors';
function App() {
  

  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>

    <Route path="/" element={<HomePage/>}/>
    <Route path="/location" element={<LocationPage/>}/>
    <Route path="/masterplan" element={<MasterPlanPage/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
  
    <Route path="/explorebuildings" element={<ExploreBuildings/>}/>
    <Route path="/floor/:id" element={<Floors/>}/>    {/*Towers  */}
   
    
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
