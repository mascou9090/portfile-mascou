import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content:center;
  flex-wrap: wrap;
  overflow: auto;
  text-align: center;
  ::-webkit-scrollbar-track {
      background-color:orange;
    }
  h2 {
    margin: 1rem;
    font-size: 2.5em;
    font-weight: 300;
    width:100%;
  }
`;