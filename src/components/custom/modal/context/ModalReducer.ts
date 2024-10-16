import { IModalState } from '../provider/ModalProvider'

type ModalActions =
  | { type: 'OPEN_MODAL'; payload: IModalState }
  | { type: 'CLOSE_MODAL' }

export const modalReducer = (
  state: IModalState,
  action: ModalActions,
): IModalState => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        title: action.payload.title,
        active: action.payload.active,
        bodyModal: action.payload.bodyModal,
        dismissAuto: action.payload.dismissAuto,
        widthDimension: action.payload.widthDimension,
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        title: '',
        active: false,
        bodyModal: null,
        dismissAuto: true,
      }
    default:
      return state
  }
}
