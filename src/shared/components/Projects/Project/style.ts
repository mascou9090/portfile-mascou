import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  border: solid 1px #fff;
  width:22rem;
  height:15rem;
  img {
    width: 100%;
    height: 100%;
    transition: 0.8s;
    &:hover {
      opacity: 0.6;
    }
  }
`;