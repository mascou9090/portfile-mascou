import styled from 'styled-components';

export const Container = styled.main`
  display:flex;
  height:80vh;
  @media (max-width: 1150px) {
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:1rem auto;
    height:80%;
  }
`;

export const ContentMain = styled.div`
  display:flex;
`;