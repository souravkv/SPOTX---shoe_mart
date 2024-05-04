
import {BrowserRouter , Routes ,Route, HashRouter} from 'react-router-dom'
import { Home } from './Home';
import Login from './components/Login';
import New from './components/New';
import TrySite from './components/TrySite';
import Checkout from './components/Checkout';


export const App = () => {
  return (

    
    <div>
     
      <HashRouter>
        <Routes>
          {/* <Route path='/home' element={<Home/>} />  
          <Route path='/login' element={<Login/>} />  
          <Route path='/' element={<Login/>} /> 
        <Route path='/try' element={<TrySite></TrySite>} />  */}
         <Route path='/' element={<New/>} /> 
         <Route path='/home' element={<New/>} /> 
         <Route path='/checkout' element={<Checkout/>} /> 
         <Route path='/log' element={<Login/>} />  
          


      </Routes>
      </HashRouter>
    </div>
  );
};


export default App;