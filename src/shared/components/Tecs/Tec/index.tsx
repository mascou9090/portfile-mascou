import { PropsTec } from "../../../types";
import * as C from "./style";
import { bioChangeAction, bioChangeActionParagraf, bioChangeActionParagrafFalse } from "../../../redux/Acitons/action";
import { useDispatch } from "react-redux";
import { useState } from "react";

export const Tec = ({url, index}: PropsTec) => {
  const [valueParagraf,setValueParagraf ] = useState(false);

  const dispatch = useDispatch()
  
  const handleClick = () => {
    setValueParagraf(!valueParagraf);


    if(valueParagraf === true) dispatch(bioChangeActionParagraf(valueParagraf));
    if(valueParagraf === false) dispatch(bioChangeActionParagrafFalse());

    dispatch(bioChangeAction(index));
  }

  return (
    <C.Container>
      <img onClick={handleClick} src={url} alt="Icones de tecnologias"/>
    </C.Container>
  );
};
