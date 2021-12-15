import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HomePage from './pages/HomePage'
import MatchPage from './pages/MatchPage'
import TeamPage from './pages/TeamPage'
import {paths} from './static/PathsData'

const WebRoutes = () => {
  return (
      <Router>
        <Sidebar />
        <Routes>
          <Route path={paths[0].path} exact element={<HomePage />} />
          <Route path="/teams/:teamName" exact element={<TeamPage />} />
          <Route path="/teams/:teamName/matches/:year" element={<MatchPage />} />
        </Routes>
      </Router>
  );
}

export default WebRoutes
