import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 35rem;
  background-color: #808080;
  flex: 1;

  & svg {
    position: absolute;
    cursor: pointer;
    color: white;
    transition: filter 0.3s;
    z-index: 1;
  }

  & svg:hover {
    filter: drop-shadow(0 0 5px #fff);
  }
`;

export const Images = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  /* box-shadow: 0 0 7px rgba(0, 0, 0, 0.2); */
  translate: ${({ $slide }) => `${-100 * $slide}%`};
  object-fit: cover;
  /* object-fit: cover; */
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 0.5s ease-in-out;
`;

export const Video = styled.video.attrs({
  autoPlay: true,
  muted: true,
  loop: true,
  playsInline: true
})`
  width: 100%;
  height: 100%;
  /* box-shadow: 0 0 7px rgba(0, 0, 0, 0.2); */
  translate: ${({ $slide }) => `${-100 * $slide}%`};
  object-fit: cover;
  /* object-fit: cover; */
  flex-shrink: 0;
  flex-grow: 0;
  transition: translate 0.5s ease-in-out;
`;

// export const CircleChevronLeft = styled(LeftArrow)`
//   left: 1rem;
// `;

// export const CircleChevronRight = styled(RightArrow)`
//   right: 1rem;
// `;

export const Span = styled.span`
  display: flex;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

export const Button = styled.span`
  width: 1rem !important;
  height: 1rem !important;
  border-radius: 100%;
  border: none;
  background-color: white;
  outline: none;
  box-shadow: 0 0 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
  opacity: ${({ $inactive }) => ($inactive ? 1 : .3)};
  transition: opacity 0.7s;
`;
