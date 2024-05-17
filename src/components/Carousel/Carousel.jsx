import { useEffect, useState } from 'react';
import * as S from './styles';

const Carousel = ({ slides }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + slides.length) % slides.length);
  };

  const interval = setInterval(nextSlide, 5000);
  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval]);

  return (
    <S.Container>
      <S.CircleChevronLeft size={32} onClick={prevSlide} />
        <S.Images>
          {slides.map((image, index) => (
            <S.Image key={index} src={image.url} alt={image.alt} $slide={slide} />
          ))}
        </S.Images>
      <S.CircleChevronRight size={32} onClick={nextSlide} />
      <S.Span>
        {slides.map((_, index) => (
          <S.Button type='button' key={index} onClick={() => {
            setSlide(index);
          }} $inactive={index === slide}></S.Button>
        ))}
      </S.Span>
    </S.Container>
  );
};

export default Carousel;
