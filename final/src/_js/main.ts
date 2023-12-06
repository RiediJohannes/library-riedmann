window.onload = () => {
  let menus = Array.from(document.getElementsByClassName("navbar-menu"));

  for (let burger of document.getElementsByClassName("navbar-burger")) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      menus.forEach(menu => menu.classList.toggle("is-active"));
    })
  }
};