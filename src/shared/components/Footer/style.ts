import styled, { keyframes } from 'styled-components';

const Mtag = keyframes`
  from {
    transform: rotateY(0deg) 
  }to {
    transform: rotateY(360deg)
  }
`;

const MColor = keyframes`
  0% {color: #fff}
  30% {color: #ff4042}
  80% {color: #ff4042}
  100% {color: #fff}
`;

export const Container = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  margin:2rem auto;
  width: 80vw;
  max-width:60%;
  transition: 1s;
  h2 {
    font-size:2rem;
    animation: 
      ${Mtag} 4s infinite,
      ${MColor} 3s infinite;
  }
  @media (max-width:630px) {
    flex-direction:column;
  }
`;

