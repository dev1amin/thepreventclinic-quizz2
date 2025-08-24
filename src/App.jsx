import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Social from './pages/Social';
import Question from './pages/Question';
import Analysis from './pages/Analysis';
import Final from './pages/Final';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/social" element={<Social />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/final" element={<Final />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;