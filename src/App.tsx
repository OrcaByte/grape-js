
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/index';
import MovieSelectorDialog from './Pages/Dashboard/MovieSelectorDialog';
import Studio from './Pages/Studio';



export default function App() {
 
  return (
    <div>
      

        <MovieSelectorDialog/>

        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/studio' element={<Studio/>}/>
        </Routes>

    </div>
  );
}
