import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
