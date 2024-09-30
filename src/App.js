import './App.css';
import Profile from './components/profile/Profile';
import Business from './components/business/Business';
import Head from './components/head/Head';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Head/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Profile/>}/>
        <Route path='/next' element={<Business/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
