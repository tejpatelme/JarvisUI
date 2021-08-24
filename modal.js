const modalExample = document.querySelector(".modal-example");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".btn-close");

function openModal() {
  modalExample.style.display = "flex";
}

function closeModal() {
  modalExample.style.display = "none";
}

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
