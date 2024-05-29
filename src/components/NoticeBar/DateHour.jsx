import { useEffect, useState } from 'react';
import * as S from './styles';

const DateHour = () => {
  const date = new Date().getDate();
  const month = new Date().toLocaleString('pt-br', { month: 'long' });
  const [hour, setHour] = useState('');
  const [, setSeconds] = useState('');

  const timer = setTimeout(() => {
    const newHour = new Date().toLocaleTimeString('pt-br', { hour: '2-digit', minute: '2-digit', second: '2-digit'});
    const splitedNewHour = newHour.split(':');
    setHour(`${splitedNewHour[0]}h:${splitedNewHour[1]}`);
    setSeconds(splitedNewHour[2]);
  }, 1000);
  
  useEffect(() => {
    return () => clearTimeout(timer);
  }, [timer]);

  return (
    <S.DateContainer>
      <S.DateHourMonthContainer>
        <S.DateMonth>
          <S.Date>
            {date}
          </S.Date>
          <S.Month>
            {month}
          </S.Month>
        </S.DateMonth>
        <S.Hour>
          {hour}
        </S.Hour>
      </S.DateHourMonthContainer>
    </S.DateContainer>
  );
};

export default DateHour;
