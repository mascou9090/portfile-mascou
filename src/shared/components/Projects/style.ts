import styled, { keyframes } from 'styled-components';

const textAnimation = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  } to {
    transform: translateY(0px);
    opacity: 1;
  }
`

export const Container = styled.div`
  display:flex;
  justify-content: center;
  flex-wrap:wrap;
  margin: 9.14rem auto;
  animation: ${textAnimation} 0.6s ease-in;
  flex-wrap: wrap;
  max-width: 70rem;
  p {
    font-size: 1.6rem;
  }
`;