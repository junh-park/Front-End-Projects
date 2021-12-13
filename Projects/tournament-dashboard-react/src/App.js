import TeamPage from './pages/TeamPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MatchPage from './pages/MatchPage';
import styled from 'styled-components'
import Navbar from './components/Navbar'

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/teams/:teamName" exact element={ <TeamPage />} />
          <Route path="/teams/:teamName/matches/:year" element={ <MatchPage />} />
        </Routes>
      </Router>
  );
}

export default App;
