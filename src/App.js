import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation, Home, About, Cookie } from './components/index';
import Snowfall from 'react-snowfall';
import { Lights } from './components/index';

function App() {
  return (
    <Router>
      <Snowfall
        color="white"
        snowflakeCount={25}
        style={{ height: '100vh', position: 'fixed' }}
      />
      <Lights />
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
