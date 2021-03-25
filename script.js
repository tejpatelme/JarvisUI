const button = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");
const modalButton = document.querySelector(".modal-button");
const modalExample = document.querySelector(".modal-example");
const closeButton = document.querySelector(".btn-close");

let open = false;
let x = window.matchMedia("(min-width:768px)");

const handleClick = () => {
  if (open) {
    sidebar.style.display = "none";
    open = false;
  } else {
    sidebar.style.display = "block";
    open = true;
  }
};

function handleChange(query) {
  if (query.matches) {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

function openModal() {
  modalExample.style.display = "flex";
}

function closeModal() {
  modalExample.style.display = "none";
}

x.addListener(handleChange);

handleChange(x);

button.addEventListener("click", handleClick);
modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
