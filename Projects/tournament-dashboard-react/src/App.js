import styled from 'styled-components'
import WebRoutes from './WebRoutes';
import "./App.css";

const Container = styled.div`
  display: flex;
  background: #eaeaea;
`
function App() {

  return (
    <Container>
      <WebRoutes />
    </Container>
  );
}

export default App;
