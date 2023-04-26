import { ActionBioImg, ActionBioParagraf } from "./action-types"

const inicitalState = {
  currentValueBioImg: 0,
  currentStateParagraf: false,
}
export const bioImgReducer = (state = inicitalState, action:any) => {
  switch(action.type) {
    case ActionBioImg.TRUE:
      return {...state, currentValueBioImg: action.payload};
    case ActionBioParagraf.TRUE:
      return {...state, currentStateParagraf: action.payload};
    case ActionBioImg.FALSE:
      return  {...state, currentValueBioImg: 0};
    case ActionBioParagraf.FALSE:
      return {...state, currentStateParagraf: false};
    default:
      return state
  }
}