import { ActionBioImg } from "../bioImg/action-types";

export const bioChangeAction = (payload:any) => ({
  type: ActionBioImg.TRUE,
  payload
})

export const bioChangeActionFalse = () => ({
  type: ActionBioImg.FALSE,
})
