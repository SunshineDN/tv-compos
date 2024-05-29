import Sidebar from './components/Sidebar/Sidebar';
import Carousel from './components/Carousel/Carousel';
import NoticeBar from './components/NoticeBar/NoticeBar';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getFilenames } from './api/GetFiles';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

function App() {
  const [filenames, setFilenames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFilenames();
      setFilenames(response);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Carousel slides={filenames} />
        <NoticeBar />
      </MainContent>
    </Container>
  );
}

export default App;
