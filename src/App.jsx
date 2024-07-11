import './App.css'
import ComponentLifeCycle from './Components/ComponentLifeCycle'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Mount from './Components/Mount';
import Unmount from './Components/Unmount';
import Update from './Components/Update';
export default function App() {
  return (
    <div>
       <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<ComponentLifeCycle/>}>
              <Route path="Mount" element={<Mount/>}/>
              <Route path="Unmount" element={<Unmount/>}/>
              <Route path="Update" element={<Update/>}/>  
            </Route>
                       
          </Routes>
       </BrowserRouter>
    </div>
  )
}
