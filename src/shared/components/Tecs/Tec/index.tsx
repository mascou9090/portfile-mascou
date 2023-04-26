import { PropsTec } from "../../../types";
import * as C from "./style";
import { bioChangeAction } from "../../../redux/Acitons/action";
import { useDispatch } from "react-redux";

export const Tec = ({url, index}: PropsTec) => {

  const dispatch = useDispatch()
  
  const handleClick = () => {
    dispatch(bioChangeAction(index));
  }

  return (
    <C.Container>
      <img onClick={handleClick} src={url} alt="Icones de tecnologias"/>
    </C.Container>
  );
};
