import styled from 'styled-components/macro';

export const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 70px;
  height: 100%;
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  border: none;
  border-radius: 2px;
  flex: 1;
  padding: 10px;

  &:placeholder-shown {
    color: #333;
    font-size: 14px;
  }
  @media (max-width: 1000px) {
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  border: none;
  height: 70px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e50914;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: all 0.2s;
  font-size: 26px;
  cursor: pointer;
  user-select: none;
  padding: 0 32px;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
    margin-left: 10px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    background-color: #f40612;
    box-shadow: none;
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: stretch;
  max-width: 725px;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
