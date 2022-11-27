import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height: 100%;
  span {
    font-size: 1.5em;
    font-weight: 300;
  }
  h2 {
    margin: 1rem;
    font-size: 2.5em;
    font-weight: 300;
  }
  div {
    margin:1rem 6rem;
    text-align:center;
    h3 {
      margin:1rem;
      font-size: 1.6em;
      font-weight: 300;
    }
    p {
      font-size: 1,6rem;
      font-weight: 300;
    }
  }
`;