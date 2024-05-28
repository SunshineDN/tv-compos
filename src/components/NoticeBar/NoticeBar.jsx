import * as S from './styles';

const NoticeBar = () => {
  return (
    <S.Container>
      <S.NoticeDateWrapper>
        <S.DateContainer>
          <S.DateHourMonthContainer>
            <S.DateMonth>
              <S.Date>
                17
              </S.Date>
              <S.Month>
                MAIO
              </S.Month>
            </S.DateMonth>
            <S.Hour>
              13h:42
            </S.Hour>
          </S.DateHourMonthContainer>
        </S.DateContainer>

        <S.NoticeTitleDescription>
          <S.NoticeTitle>ÚLTIMAS NOTÍCIAS</S.NoticeTitle>
          <S.DescriptionWrapper>
            <S.DescriptionTitle>Confira os 5 golpes do PIX mais comuns feitos pelo celular</S.DescriptionTitle>
            <S.Description>Federação Brasileira de Bancos (Febraban) divulgou os 5 principais truques cibernéticos que os bandidos usam para induzir as vítimas a realizar o pagamento. Veja dicas para se proteger.</S.Description>
          </S.DescriptionWrapper>
        </S.NoticeTitleDescription>
      </S.NoticeDateWrapper>
    </S.Container>
  );
};

export default NoticeBar;
