import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 6rem 5rem;
  width:  100%;
  height: 80%;
  box-shadow: 1px 1px 10px 1px #452030;
  padding:1.4rem 0.5rem;
  color: #ccc;
  transition: 0.8s;
  div {
    margin:2rem 2.6rem;
    text-align:center;
    p {
      font-size: 1.1rem;
      font-weight: 300;
    }
  }
  @media (max-width:550px) {
    margin:8rem auto;
    div {
      p {
        font-size:1.2rem;
        font-weight: 300;
      }
    }
  }
  @media (max-width:450px) {
    margin:8rem auto;
    div {
      p {
        font-size:1.2rem;
        font-weight: 300;
      }
    }
  }
`;