import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  width:1.8rem;
  height: 1.8rem;
  margin: 0.4rem;
  &:hover {
    opacity:0.6;
    cursor: pointer;
  }
`;
