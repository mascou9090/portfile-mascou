import styled from 'styled-components';

export const Container = styled.aside`
  width:40vw;
  min-width:600px;
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
  margin-top:2rem;
  margin-left:10rem;
  @media (max-width:1150px) {
      margin: 2rem auto 6rem;
    }
`;