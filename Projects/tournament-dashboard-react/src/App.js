import TeamPage from './pages/TeamPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MatchPage from './pages/MatchPage';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/teams/:teamName" exact element={ <TeamPage />} />
          <Route path="/teams/:teamName/matches/:year" element={ <MatchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
