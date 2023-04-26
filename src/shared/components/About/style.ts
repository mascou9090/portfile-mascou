import styled, { keyframes } from 'styled-components';

const textAnimation = keyframes`
  from {
    transform: translateX(+20px);
    opacity: 0;
  } to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  margin: 6rem 5rem;
  width:  100%;
  height: 80%;
  padding:1.4rem 0.5rem;
  color: #ccc;
  transition: 0.8s;
  animation: ${textAnimation} 0.6s ease-in;
  div {
    margin:2rem 2.6rem;
    text-align:center;
    p {
      font-size: 1.1rem;
      font-weight: 300;
      margin-bottom: 2rem;
    }
  }
  @media (max-width:550px) {
    margin:8rem auto;
    div {
      p {
        font-size:1.2rem;
        font-weight: 300;
      }
    }
  }
  @media (max-width:450px) {
    margin:8rem auto;
    div {
      p {
        font-size:1.2rem;
        font-weight: 300;
      }
    }
  }
`;