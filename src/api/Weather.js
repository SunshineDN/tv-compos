import axios from 'axios';

export const getWeather = async () => {
  const { data } = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=-12.9711&longitude=-38.5108&current=temperature_2m,is_day,rain,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo');
  const { current, daily } = data;
  const { temperature_2m, is_day, weather_code } = current;
  const { temperature_2m_max, temperature_2m_min, weather_code: dailyWeatherCode, time } = daily;

  const dateMap = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

  const verifyWeatherCode = (code) => {
    switch (code) {
      case 0:
        return 'Ensolarado';
      case 1:
        return 'Poucas nuvens';
      case 2:
        return 'Parcialmente nublado';
      case 3:
        return 'Nublado';
      case 61:
        return 'Chuva leve';
      case 63:
        return 'Chuva moderada';
      case 65:
        return 'Chuva forte';
      case 80:
        return 'Pancadas de chuva fraca';
      case 81:
        return 'Pancadas de chuva moderada';
      case 82:
        return 'Pancadas de chuva forte';
      case 95:
        return 'Trovoada leve ou moderada';
      case 97:
        return 'Tempestade com granizo leve';
      case 99:
        return 'Tempestade com granizo forte';
      default:
        return 'Sem informação';
    }
  };

  const dailyWeather = temperature_2m_max.map((max, index) => {
    let timeIndex = time[index];
    let dayNumber = new Date(timeIndex).getDay();
    let weekDay = dateMap[dayNumber];
    return {
      average: Math.round((max + temperature_2m_min[index]) / 2),
      weekDay: `${weekDay.substring(0, 3)}.`,
      weatherCode: dailyWeatherCode[index],
      weatherStatus: verifyWeatherCode(dailyWeatherCode[index])
    };
  });

  const currentWeather = {
    temperature: Math.round(temperature_2m),
    isDay: is_day,
    weather_code,
    weatherStatus: verifyWeatherCode(weather_code)
  };

  return {
    current: currentWeather,
    daily: dailyWeather
  };
};
