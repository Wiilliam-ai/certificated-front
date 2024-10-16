import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import './index.css'
import { ModalProvider } from './components/custom/modal/provider/ModalProvider'
import { ModalComponent } from './components/custom/modal/ModalComponent'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <App />
      <ModalComponent />
    </ModalProvider>
  </StrictMode>,
)
