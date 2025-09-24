
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage';
import MasterPlanPage from './pages/MasterPlanPage';
import Gallery from './pages/Gallery';
import ExploreBuildings from './pages/ExploreBuildings';
import Floors from './Towers/Floors';
import Facilities from './pages/Facilities';
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/masterplan" element={<MasterPlanPage />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/location" element={<LocationPage />} />



          <Route path="/explorebuildings" element={<ExploreBuildings />} />
          <Route path="/floor/:id" element={<Floors />} />    {/*Towers  */}


          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
