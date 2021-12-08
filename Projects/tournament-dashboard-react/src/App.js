import './App.css';
import TeamPage from './pages/TeamPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/teams/:teamName" element={ <TeamPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
