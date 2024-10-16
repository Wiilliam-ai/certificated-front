import { createContext } from 'react'
import { IModalState } from '../provider/ModalProvider'

export interface IConfModal {
  title: string
  component: JSX.Element | null
  dismissAuto?: boolean
  widthDimension?: number
}

interface IModalContext {
  modalState: IModalState
  openModal: (conf: IConfModal) => void
  closeModal: () => void
}

export const ModalContext = createContext<IModalContext>({} as IModalContext)
