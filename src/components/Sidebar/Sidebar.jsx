import * as S from './styles.js';
import Logo from '../../assets/compos.svg';
import { useEffect, useState } from 'react';
import { getWeather } from '../../api/Weather.js';

import ChanceRain from '../../assets/icons/chancerain.svg';
import Cloudy from '../../assets/icons/cloudy.svg';
import Fog from '../../assets/icons/fog.svg';
import Tstorms from '../../assets/icons/tstorms.svg';
import ChanceSleet from '../../assets/icons/chancesleet.svg';
import ChanceTstorms from '../../assets/icons/chancetstorms.svg';
import Moon from '../../assets/icons/moon.svg';
import Sun from '../../assets/icons/sun.svg';
import MostlyCloudyNight from '../../assets/icons/mostlycloudy-night.svg';
import MostlyCloudyDay from '../../assets/icons/mostlycloudy-day.svg';
import PartyCloudyDay from '../../assets/icons/partlycloudy-day.svg';
import PartyCloudyNight from '../../assets/icons/partlycloudy-night.svg';
import Rain from '../../assets/icons/rain.svg';
import Sleet from '../../assets/icons/sleet.svg';
import Statistic from './Statistic.jsx';

function IdentifyWeatherIcon(code, isDay) {
  if (isDay === 1) {
    switch (code) {
      case 0:
        return Sun;
      case 1:
        return PartyCloudyDay;
      case 2:
        return MostlyCloudyDay;
      case 3:
        return Cloudy;
      case 45:
        return Fog;
      case 48:
        return Fog;
      case 61:
        return ChanceRain;
      case 63:
        return Rain;
      case 65:
        return Rain;
      case 80:
        return ChanceSleet;
      case 81:
        return Sleet;
      case 82:
        return Sleet;
      case 95:
        return ChanceTstorms;
      case 96:
        return Tstorms;
      case 97:
        return Tstorms;
    }
  } else {
    switch (code) {
      case 0:
        return Moon;
      case 1:
        return PartyCloudyNight;
      case 2:
        return MostlyCloudyNight;
      case 3:
        return Cloudy;
      case 45:
        return Fog;
      case 48:
        return Fog;
      case 61:
        return ChanceRain;
      case 63:
        return Rain;
      case 65:
        return Rain;
      case 80:
        return ChanceSleet;
      case 81:
        return Sleet;
      case 82:
        return Sleet;
      case 95:
        return ChanceTstorms;
      case 96:
        return Tstorms;
      case 97:
        return Tstorms;
    }
  }
}

const Sidebar = () => {
  const date = new Date().getDate();
  const month = new Date().toLocaleString('pt-br', { month: 'long' });
  const weekDay = new Date().toLocaleString('pt-br', { weekday: 'long' });
  const [current, setCurrent] = useState({});
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather();
      setCurrent(data?.current);
      setDaily(data?.daily);
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.StatusDay>
        <S.TextWrapper>
          <S.DateLocale>{weekDay} | {date} {month}</S.DateLocale>
          <S.DateLocale>Salvador | BA</S.DateLocale>
        </S.TextWrapper>

        <S.WeatherWrapper>
          <S.WeatherIcon src={IdentifyWeatherIcon(current?.weather_code, current?.isDay)} />
          <S.WeatherStatus>{current?.weatherStatus}</S.WeatherStatus>
        </S.WeatherWrapper>

        <S.WeatherTemperature>{current?.temperature}°</S.WeatherTemperature>
      </S.StatusDay>

      <S.BarWeather>
        {daily?.map((day, index) => {
          if (index === 0 || index === 6 || index === 7) {
            return;
          } else {
            return (
              <S.StatusNextDay key={index}>
                <S.NextDayTitle>{day?.weekDay}</S.NextDayTitle>
                <S.NextDayWeatherIcon src={IdentifyWeatherIcon(day?.weatherCode, current?.isDay)} />
                <S.NextDayWeatherTemperature>{day?.average}°</S.NextDayWeatherTemperature>
              </S.StatusNextDay>
            );
          }
        })}
      </S.BarWeather>

      <Statistic />

      <S.Logo src={Logo} />
    </S.Container>
  );
};

export default Sidebar;
