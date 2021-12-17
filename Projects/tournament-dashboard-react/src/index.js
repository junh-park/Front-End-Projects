import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import MatchPage from './pages/MatchPage'
import { NotFoundPage } from './pages/NotFoundPage'
import TeamPage from './pages/TeamPage'
import TeamsPage from './pages/TeamsPage'

ReactDOM.render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="teams" exact element={<HomePage />} >
            <Route index element={<TeamsPage />} />
            <Route path=":teamName" element={<TeamPage />} />
            <Route path=":teamName/matches/:year" element={<MatchPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router >
  </React.StrictMode>,
  document.getElementById('root')
);
