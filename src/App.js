import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login';
import SignupPage from './Register';
import Home from './Home';

function App() {
  return (
    <div className="App">
           <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/register' element={<SignupPage/>} />
            <Route path='/login' element={<LoginPage />} />
             
        </Routes>
    </div>
  );
}

export default App;
