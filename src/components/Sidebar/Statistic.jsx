import { useEffect, useState } from 'react';
import { getStatistics } from '../../api/Spreadsheets';
import * as S from './styles';

const Statistic = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await getStatistics();
      setStatistics(response);
    };
    fetchStatistics();
  }, []);

  return (
    <S.StatisticsWrapper>
      {statistics.map((statistic, index) => {
        if (statistic.titulo.includes('Meta')) {
          return (
            <S.Statistics $margin={'1.5rem 0 0 0'} key={index}>
              <S.StatisticsTitle $bold={600}>{statistic.titulo}</S.StatisticsTitle>
              <S.StatisticsBarValue>
                <S.StatisticsBar $value={statistic.valor} />
                <S.StatisticsValue $bold={600}>{statistic.valor}%</S.StatisticsValue>
              </S.StatisticsBarValue>
            </S.Statistics>
          );
        } else {
          return (
            <S.Statistics $flex_d={'row'} $align={'center'} $justify={'space-between'} key={index}>
              <S.StatisticsTitle>{statistic.titulo}</S.StatisticsTitle>
              <S.StatisticsValue>{statistic.valor}</S.StatisticsValue>
            </S.Statistics>
          );
        }
      })}
    </S.StatisticsWrapper>
  );
};

export default Statistic;
