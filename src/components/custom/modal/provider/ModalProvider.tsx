import { IConfModal, ModalContext } from '../context/ModalContext'
import { useReducer } from 'react'
import { modalReducer } from '../context/ModalReducer'

export interface IModalState {
  title: string
  active: boolean
  dismissAuto: boolean
  widthDimension: number
  bodyModal: JSX.Element | JSX.Element[] | null
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: IModalState = {
  title: '',
  active: false,
  bodyModal: <></>,
  dismissAuto: true,
  widthDimension: 10,
}

export const ModalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE)

  const handleCloseModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  const handleOpenModal = (conf: IConfModal) => {
    const { dismissAuto = true, widthDimension = 10 } = conf

    dispatch({
      type: 'OPEN_MODAL',
      payload: {
        title: conf.title,
        active: true,
        bodyModal: conf.component,
        dismissAuto,
        widthDimension,
      },
    })
  }

  return (
    <ModalContext.Provider
      value={{
        modalState: state,
        openModal: handleOpenModal,
        closeModal: handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
