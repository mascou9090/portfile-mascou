import styled, {keyframes} from 'styled-components';

const textAnimation = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  } to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.aside`
  width:40vw;
  min-width:600px;
  height: 80%;
  animation: ${textAnimation} 0.6s ease-in;
  @media (max-width:1150px) {
    min-width:0;
  }
`;

export const ImgS = styled.div`
  display: flex;
  justify-content:center;
  img {
    width:20rem;
    border-radius: 14rem;
    margin-top:6rem;
    margin-left:10rem;
    @media (max-width:1150px) {
      min-width:0;
      margin: 2rem auto;
    }
  }
`;

export const AboutMe = styled.div`
  text-align: center;
  margin: 2rem 0 0 10rem;
  @media (max-width:1150px) {
      margin: 2rem auto 6rem;
    }
`;

export const NevDiv = styled.div`
  margin: 4rem 0 0 10rem;
   p {
    padding-top: 5rem;
    text-align: center;
    height: 20rem;
    max-width: 30rem;
    border: 1px solid #ccc;
  }
  @media (max-width:1150px) {
    margin: 2rem auto 6rem;
    p {
      min-width:10rem;
    }
  }
`;