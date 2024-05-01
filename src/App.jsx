
import {BrowserRouter , Routes ,Route} from 'react-router-dom'
import { Home } from './Home';
import Login from './components/Login';
import New from './components/New';

export const App = () => {
  return (

    
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />  
          <Route path='/login' element={<Login/>} />  
          <Route path='/' element={<Login/>} /> 
          <Route path='/new' element={<New/>} />  


      </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;