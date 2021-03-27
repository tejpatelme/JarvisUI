const menuButton = document.querySelector(".menu-button");
const sidebar = document.querySelector(".sidebar");

let open = false;

//checking if width of the container is 768px or less
let x = window.matchMedia("(min-width:768px)");

//Opening & closing of sidebar on press of menuButton
const handleOpenCloseSidebar = () => {
  if (open) {
    sidebar.style.display = "none";
    open = false;
  } else {
    sidebar.style.display = "block";
    open = true;
  }
};

//Hiding/showing sidebar based on the specified breakpoint
function handleChange(query) {
  if (query.matches) {
    sidebar.style.display = "block";
  } else {
    sidebar.style.display = "none";
  }
}

x.addListener(handleChange);

//initial check for sidebar
handleChange(x);

menuButton.addEventListener("click", handleOpenCloseSidebar);
