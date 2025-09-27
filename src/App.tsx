
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import LocationPage from './pages/LocationPage';
import MasterPlanPage from './pages/MasterPlanPage';
import Gallery from './pages/Gallery';
import ExploreBuildings from './pages/ExploreBuildings';
import Floors from './Towers/Floors';
import Facilities from './pages/Facilities';
import View360Page from './pages/View360Page';

function App() {

const location=useLocation();

const hideHeader=location.pathname.startsWith("/explore360deg/")
  return (
    <>
     
       {!hideHeader && <Header />}
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/masterplan" element={<MasterPlanPage />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/location" element={<LocationPage />} />



          <Route path="/explorebuildings" element={<ExploreBuildings />} />
          <Route path="/floor/:id" element={<Floors />} />    {/*Towers  */}

          <Route path="/explore360deg/:floorId" element={<View360Page/>}/>
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
     
    </>
  )
}

export default App
