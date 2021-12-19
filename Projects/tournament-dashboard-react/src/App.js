import { Outlet } from 'react-router';
import styled from 'styled-components'
import "./App.css";
import Sidebar from './components/Sidebar';
import { HomePage } from './pages/HomePage';

const Container = styled.div`
  display: flex;
  background: #eaeaea;
  gap: 20px;
  div {

  }

`
function App() {
  return (
    <Container>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </Container>
  );
}

export default App;
