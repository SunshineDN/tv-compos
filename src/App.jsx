import Sidebar from './components/Sidebar/Sidebar';
import Carousel from './components/Carousel/Carousel';
import NoticeBar from './components/NoticeBar/NoticeBar';
import { slides } from './data/carouselDatas.json';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

function App() {

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Carousel slides={slides} />
        <NoticeBar />
      </MainContent>
    </Container>
  );
}

export default App;
