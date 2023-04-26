import { ActionBioImg } from "./action-types"

const inicitalState = {
  currentValueBioImg: 0,
}
export const bioImgReducer = (state = inicitalState, action:any) => {
  switch(action.type) {
    case ActionBioImg.TRUE:
      return {...state, currentValueBioImg: action.payload};
    case ActionBioImg.FALSE:
      return  {...state, currentValueBioImg: 0};
    default:
      return state
  }
}