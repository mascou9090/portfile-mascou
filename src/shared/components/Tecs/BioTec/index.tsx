import * as C from './style';
import { PropsBioTec } from "../../../types";
import { useSelector } from 'react-redux';

export const BioTec = ({bioTec, index}: PropsBioTec) => {
  
  const { currentValueBioImg } = useSelector((rootReducer:any) => rootReducer.bioImgReducer)

  return (
    <C.Container>
      {currentValueBioImg !== 0 ? (
      <C.Paragraf >{bioTec[index[currentValueBioImg]]}</C.Paragraf>) : (
      <C.Paragraf >{bioTec[0]}</C.Paragraf>)
      }
    </C.Container>
  )
};