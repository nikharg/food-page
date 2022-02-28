import './App.css';
import Checkout from './pages/Checkout';
import Homepage from './pages/Homepage';
import Menu from './pages/Menu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      <Routes>
      <Route path="/menu" element={<Menu/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
