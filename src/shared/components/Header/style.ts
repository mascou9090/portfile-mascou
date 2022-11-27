import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkS = styled(Link)`
  color:white;
  transition: 0.6s;
  a {
    text-decoration: none;
  }
  &:hover {
    color:#aaa;
  }
`;
