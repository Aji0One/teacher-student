import Navbar from './Components/Navbar/index'
import Student from './Components/Student/student';
import Teacher from './Components/Teacher/teacher';
import Dash from './Components/Dashboard/index';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dash/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/mentor' element={<Teacher/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
      
    
  );
}

export default App;
