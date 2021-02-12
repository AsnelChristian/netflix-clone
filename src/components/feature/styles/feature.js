import styled from 'styled-components/macro';

export const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 165px 0;
  margin: 0 auto;
  text-align: center;
  border-bottom: 8px solid #222;
`;
export const Title = styled.h1`
  font-size: 64px;
  max-width: 700px;
  font-weight: bold;
  line-height: 70.4px;
  margin: 0 75px;

  @media (max-width: 600px) {
    font-size: 40px;
  }
`;
export const SubTitle = styled.h2`
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
