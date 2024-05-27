import Sidebar from './components/Sidebar/Sidebar';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import { slides } from './data/carouselDatas.json';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-auto-flow: row dense;
  grid-auto-columns: 1fr;
  grid-template-columns: 0.3fr 1.7fr;
  grid-template-rows: 1.5fr 0.5fr;
  gap: 0px 0px;
  grid-template-areas:
    "Sidebar Carousel"
    "Sidebar Footer";
  justify-content: stretch;
  align-items: stretch;
  height: 100vh;
  width: 100%;
`;

function App() {

  return (
    <Container>
      <Sidebar />
      <Carousel slides={slides} />
      <Footer />
    </Container>
  );
}

export default App;
