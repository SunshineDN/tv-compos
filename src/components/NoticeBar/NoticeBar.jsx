import * as S from './styles';

const NoticeBar = () => {
  return (
    <S.Container>
      <S.RetangleDate />
      <S.DateHour>
        <S.DateHourBackground>
          <S.Day>
            17
          </S.Day>
          <S.Month>
            MAIO
          </S.Month>
          <S.Hour>
            13h:42
          </S.Hour>
        </S.DateHourBackground>
      </S.DateHour>
      <S.NoticeWrapper>
        <S.TitleNoticesWrapper>
          <S.Retangle />
          <S.TitleBackground>
            <S.Title>
              ULTIMAS NÓTICIAS
            </S.Title>
          </S.TitleBackground>
        </S.TitleNoticesWrapper>
        <S.DescNoticesWrapper>
          <S.DescriptionTitle>
            Confira os 5 golpes do PIX mais comuns feitos pelo celular
          </S.DescriptionTitle>
          <S.Description>
            Federação Brasileira de Bancos (Febraban) divulgou os 5 principais truques cibernéticos que os bandidos usam para induzir as vítimas a realizar o pagamento. Veja dicas para se proteger.
          </S.Description>
        </S.DescNoticesWrapper>
      </S.NoticeWrapper>
    </S.Container>
  );
};

export default NoticeBar;
