export const myLink = {
  openBtn: document.querySelector('.openModal'),
  closeBtn: document.querySelector('.closeModal'),
  modal: document.querySelector('.main_modal')
}

myLink.openBtn.addEventListener('click', () => myLink.modal.style.display = 'flex');
myLink.closeBtn.addEventListener('click', () => myLink.modal.style.display = 'none');