import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100%;
  ul {
    display: flex;
  }
  div {
    margin-top:2rem;
  }
  @media (max-width: 1150px) {
    ul {
      flex-direction: column;
    }
    div {
      height:80%;
    }
  }
`;

export const Contacts = styled.div`
    height: 75.7vh;
    div {
      text-align: center;
      h3 {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
    li {
      margin:2rem auto;
      list-style: none;
      cursor: pointer;
      color: #467899;
      svg {
        transition: 0.8s;
        font-size: 7rem;
        &:hover {
          color: #623840
        }
      }
    }
    a {
      color: #ccc;
    }
    @media (max-width: 1150px) {
      li {
        svg {
          font-size: 4rem;
        }
      }
    }
   
`;