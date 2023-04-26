import { Link } from "react-router-dom";
import styled from "styled-components";


export const Header = styled.header`
  height:2rem;
  padding-bottom: 3rem;
  margin: 0 4rem 0;
  border-bottom: 1px solid #ccc;
  ul {
    display:flex;
    justify-content:center;
    li {
      margin: 1rem;
      list-style: none;
      cursor:pointer;
      color:#fff;
      
    }
  }
`;

export const LinkS = styled(Link)`
  text-decoration: none;
  color:#ccc;
  transition: 0.8s;
  &:hover {
        color:#484860;
        border-bottom: solid 2px #484860;
      }
`;