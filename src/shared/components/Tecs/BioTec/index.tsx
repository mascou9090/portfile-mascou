import * as C from './style';
import { PropsBioTec } from "../../../types";
import { useSelector } from 'react-redux';

export const BioTec = ({bioTec, index}: PropsBioTec) => {
  
  const { currentValueBioImg, currentStateParagraf } = useSelector((rootReducer:any) => rootReducer.bioImgReducer)
  

  return (
    <C.Container>
      {currentValueBioImg !== 0 ? (
      <C.Paragraf valueDefault={currentStateParagraf}>{bioTec[index[currentValueBioImg]]}</C.Paragraf>) : (
      <C.Paragraf valueDefault={currentStateParagraf}>{bioTec[0]}</C.Paragraf>)
      }
    </C.Container>
  )
};