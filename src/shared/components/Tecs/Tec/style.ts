import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  width:2.2rem;
  height:2.2rem;
  margin: 0.5rem 0.5rem 0.8rem;
  &:hover {
    opacity:0.6;
    cursor: pointer;
  }
`;
