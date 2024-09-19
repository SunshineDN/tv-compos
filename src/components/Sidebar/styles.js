import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  min-width: 20%;
  max-width: 100px;
  background-color: #808080;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #F5F5F5;
  gap: 30px 0;
`;

export const StatusDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px 0;
`;

export const DateLocale = styled.p`
  font-size: 1.5rem;
  text-align: center;
  text-transform: capitalize;
`;

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WeatherIcon = styled.img`
  width: 7rem;
  height: 7rem;
`;

export const WeatherStatus = styled.p`
  font-size: 1.8rem;
  text-align: center;
  text-transform: lowercase;
  font-variant: small-caps;
`;

export const WeatherTemperature = styled.p`
  font-size: 4.5rem;
  text-align: center;
  font-weight: 200;
`;

export const BarWeather = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px 10px;
`;

export const StatusNextDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px 0;
  width: 60px;
`;

export const NextDayTitle = styled.p`
  font-size: .8rem;
  text-align: center;
  font-weight: 400;
  font-weight: 200;
`;

export const NextDayWeatherIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const NextDayWeatherTemperature = styled.p`
  font-size: 1rem;
  font-weight: 200;
`;

export const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
  width: 100%;
`;

export const Statistics = styled.div`
  display: flex;
  flex-direction: ${({ $flex_d }) => $flex_d || 'column'};
  justify-content: ${({ $justify }) => $justify || 'center'};
  align-items: ${({ $align }) => $align || 'flex-start'};
  margin: ${({ $margin }) => $margin || 0};
`;

export const StatisticsTitle = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ $bold }) => $bold || 400};
`;

export const StatisticsBarValue = styled.div`
  display: flex;
  align-items: center;
  gap: 0 15px;
  width: 100%;
`;

export const StatisticsBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: #484848;
  position: relative;
  border-radius: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.$value}%;
    height: 100%;
    background-color: #C8102E;
    border-radius: 1rem;
  }
`;

export const StatisticsValue = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ $bold }) => $bold || 400};
`;

export const Logo = styled.img`
  height: 1.3rem;
  object-fit: contain;
`;
