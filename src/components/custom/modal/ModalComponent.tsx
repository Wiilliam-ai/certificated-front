import { useModal } from './hooks/useModal'

export const ModalComponent = () => {
  const { modalState, closeModal } = useModal()

  const { widthDimension } = modalState

  console.log({ widthDimension })

  if (!modalState.active) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-center p-2">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => {
          const isActiveDismiss = modalState.dismissAuto
          if (!isActiveDismiss) return
          closeModal()
        }}
      ></div>
      <div
        className="bg-white w-full p-4 rounded-md z-40 h-max mt-20"
        style={{
          maxWidth: `${widthDimension}rem`,
        }}
      >
        <h1 className="text-xl font-bold mb-2">{modalState.title}</h1>
        <div>{modalState.bodyModal}</div>
      </div>
    </div>
  )
}
