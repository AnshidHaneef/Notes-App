import {Routes, Route} from 'react-router-dom'
// import router from '../../server/Routes/router';
import Home from './Pages/Home';
import Addnote from './Pages/Addnote';
import EditNote from './Pages/EditNote';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home/> } />
      <Route path='/Addnote' element={ <Addnote/> } />
      <Route path='/EditNote/:id' element={ <EditNote/> } />

      </Routes>
    </>   
  );
}

export default App;
