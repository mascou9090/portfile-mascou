import { ActionBioImg, ActionBioParagraf } from "../bioImg/action-types";

export const bioChangeAction = (payload:any) => ({
  type: ActionBioImg.TRUE,
  payload
})

export const bioChangeActionParagraf = (payload:any) => ({
  type: ActionBioParagraf.TRUE,
  payload
})
export const bioChangeActionFalse = () => ({
  type: ActionBioImg.FALSE,
})

export const bioChangeActionParagrafFalse = () => ({
  type: ActionBioParagraf.FALSE,
})