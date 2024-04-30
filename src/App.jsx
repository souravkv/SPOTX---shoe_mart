
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import { Home } from './Home';
import Login from './components/Login';

export const App = () => {
  return (

    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />  
          <Route path='/login' element={<Login/>} />  


      </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;