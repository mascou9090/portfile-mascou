import styled from 'styled-components';

export const Container = styled.main`
  display:flex;
  @media (max-width: 1150px) {
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:auto;
  }
`;

export const Section = styled.section`
  
  display:flex;

  width:60vw;
  min-width:500px;
  height:80vh;
  border:1px solid #592929;
  box-shadow: 2px 2px 10px 1px rgb(39, 00, 10);
  border-radius:8px;
  overflow:hidden;
  margin:2rem 12rem 0 0;

  @media (max-width:1150px) {
    margin:auto;
    min-width:300px;
  }
`;