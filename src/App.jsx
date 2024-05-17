import Carousel from './components/Carousel/Carousel';
import { slides } from './data/carouselDatas.json';

function App() {

  return (
    <>
      <Carousel slides={slides} />
    </>
  );
}

export default App;
