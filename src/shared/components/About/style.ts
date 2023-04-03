import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 5rem;
  width:  100%;
  height: 80%;
  span {
    font-size: 1.5em;
    font-weight: 300;
  }
  div {
    margin:0rem 2.6rem;
    text-align:center;
    p {
      font-size: 1.3rem;
      font-weight: 300;
    }
  }
  @media (max-width:550px) {
    div {
      p {
        font-size:1rem;
        font-weight: 300;
      }
    }
  }
  @media (max-width:450px) {
    div {
      p {
        font-size:0.8rem;
        font-weight: 300;
      }
    }
  }
`;