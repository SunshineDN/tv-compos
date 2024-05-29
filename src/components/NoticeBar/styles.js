import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  padding: 10px 25px;
  background-color: #CDCDCD;
  width: 100%;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.3);
`;

export const NoticeDateWrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

export const NoticeTitleDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NoticeTitle = styled.div`
  position: relative;
  padding: 5px 12px;
  width: 100%;
  max-width: 300px;
  background-color: #808080;

  font-size: 1.5rem;
  font-weight: 700;
  color: #FFF;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0.5rem;
    height: 100%;
    background-color: #F5F5F5;
  }
`;

export const DescriptionWrapper = styled.div`
  display: ${({ $visible }) => $visible};
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  background-color: #F5F5F5;
  padding: 1rem;
  gap: 5px 0;
  min-height: 7.4rem;
  width: 100%;
`;

export const DescriptionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: #C8102E;
  animation: ${fadeIn} 2.5s;

`;

export const Description = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #151515;
  animation: ${fadeIn} 2.5s;
`;

export const DateContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #151515;

  color: #FFFFFF;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -8px;
    width: 0.5rem;    
    height: 100%;
    background-color: #F5F5F5;
  }
`;

export const DateHourMonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 10px 0;
`;

export const DateMonth = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.div`
  font-size: 4rem;
  font-weight: 700;
`;

export const Month = styled.div`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 500;
  transform: rotate(-90deg);
  margin-left: -0.4rem;
  margin-right: -0.4rem;
`;

export const Hour = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
`;
