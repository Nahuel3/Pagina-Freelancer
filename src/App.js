import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

//Componentes principales ((rutas))
import Homepage from './routes/Homepage'
import Faq from './routes/Faq'

function App() {
  return (
    <Router>
      <Routes>
          <Route exacth path="/" element={<Homepage/>}/>
      </Routes>
      <Routes>
          <Route path="/faq" element={<Faq/>}/>
      </Routes>
    </Router>
  );
}

export default App;
