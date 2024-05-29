import { useEffect, useState } from 'react';
import * as S from './styles';
import DateHour from './DateHour';
import { getNotices } from '../../api/Spreadsheets';


const NoticeBar = () => {
  const [ noticeIndex, setNoticeIndex ] = useState(0);
  const [ notices, setNotices ] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const response = await getNotices();
      setNotices(response);
    };
    fetchNotices();
  }, []);

  
  const changeNotice = () => {
    setNoticeIndex((noticeIndex + 1) % notices.length);
  };

  const timer = setTimeout(() => {
    console.log(notices);
    changeNotice();
  }, 15000);
  
  useEffect(() => {
    console.log('useEffect');
    return () => clearTimeout(timer);
  }, [timer]);

  return (
    <S.Container>
      <S.NoticeDateWrapper>
        <DateHour />
        <S.NoticeTitleDescription>
          <S.NoticeTitle>ÚLTIMAS NOTÍCIAS</S.NoticeTitle>
          {notices.map((notice, index) => (
            <S.DescriptionWrapper key={index} $visible={ index === noticeIndex ? 'flex' : 'none'}>
              <S.DescriptionTitle>{notice.titulo}</S.DescriptionTitle>
              <S.Description>{notice.descricao}</S.Description>
            </S.DescriptionWrapper>
          ))}
        </S.NoticeTitleDescription>
      </S.NoticeDateWrapper>
    </S.Container>
  );
};

export default NoticeBar;
