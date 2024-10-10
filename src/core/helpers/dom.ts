import { Modal } from 'bootstrap'

function hideModal(modalEl: HTMLElement | null): void {
  if (!modalEl) {
    return
  }

  const myModal = Modal.getInstance(modalEl)
  myModal?.hide()
}

function removeModalBackdrop(): void {
  if (document.querySelectorAll('.modal-backdrop.fade.show').length) {
    document.querySelectorAll('.modal-backdrop.fade.show').forEach((item) => {
      item.remove()
    })
  }
}

export { hideModal, removeModalBackdrop }
