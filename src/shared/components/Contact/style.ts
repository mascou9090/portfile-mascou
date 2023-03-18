import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height: 100%;
  h2 {
    margin: 1rem;
    font-size: 2.5em;
    font-weight: 300;
  }
  div {
    margin-top:2rem;
  }
`;

export const Contacts = styled.div`
    li {
      margin:2rem;
      list-style: none;
      cursor: pointer;
      color: #467899;
      svg {
        transition: 0.8s;
        font-size: 3rem;
        &:hover {
          color: #623840
        }
      }
    }
    a {
      color: #ccc;
    }
   
`;