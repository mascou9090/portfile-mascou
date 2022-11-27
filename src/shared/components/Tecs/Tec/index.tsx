import { PropsTec } from "../../../types";
import * as C from "./style";

export const Tec = ({url}: PropsTec) => {
  return (
    <C.Container>
      <img src={url}/>
    </C.Container>
  );
};
