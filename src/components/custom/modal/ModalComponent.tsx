import { useModal } from './hooks/useModal'

export const ModalComponent = () => {
  const { modalState, closeModal } = useModal()

  const { widthDimension } = modalState

  if (!modalState.active) return null

  return (
    <div className="animate-fadeIn fixed inset-0 z-50 flex justify-center p-2">
      <div
        className="absolute inset-0 bg-black bg-opacity-15"
        onClick={() => {
          const isActiveDismiss = modalState.dismissAuto
          if (!isActiveDismiss) return
          closeModal()
        }}
      ></div>
      <div
        className="animate-fadeInUp bg-sky-700 w-full rounded-2xl z-40 h-max mt-20"
        style={{
          maxWidth: `${widthDimension}rem`,
        }}
      >
        <h1 className="text-xl md:text-2xl font-bold rounded-t-2xl py-2 text-center text-slate-100">
          {modalState.title}
        </h1>
        <div className="p-4 bg-white rounded-b-2xl rounded-t-xl">
          {modalState.bodyModal}
        </div>
      </div>
    </div>
  )
}
