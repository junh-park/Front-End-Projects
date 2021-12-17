import styled from 'styled-components'
import "./App.css";
import Sidebar from './components/Sidebar';
import { HomePage } from './pages/HomePage';

const Container = styled.div`
  display: flex;
  background: #eaeaea;
`
function App() {

  return (
    <Container>
      <Sidebar />
      <HomePage />
    </Container>
  );
}

export default App;
