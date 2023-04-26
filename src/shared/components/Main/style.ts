import styled from 'styled-components';

export const Container = styled.main`
  display:flex;
  
  @media (max-width: 1150px) {
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:1rem auto;
  }
`;


export const ImagPerfil = styled.img`
  width: 300px;
  height: 300px;
  margin: 10rem 14rem;
`;