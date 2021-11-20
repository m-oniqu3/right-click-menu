//Selectors

let content = document.querySelector(".content");
let menu = document.getElementById("menu-div");
let resetColor = document.querySelector(".reset .btn");

// DOMContentLoaded ensures that all the html content has be read before the functions below take place
document.addEventListener("DOMContentLoaded", () => {
  //Functions

  //sets the display property of the menu to none
  menu.classList.add("menu-off");

  /*when the user right clicks with the content, this function prevents the default right click function from taking place, allows the menu to display by removing the menu-off class and positioning the menu beside the click event */

  let addMenu = (ev) => {
    ev.preventDefault();
    menu.classList.remove("menu-off");
    menu.style.position = "absolute";
    menu.style.top = `${ev.clientY}px`;
    menu.style.left = `${ev.clientX}px`;
  };

  /* when the menu is displayed and the user selects a colour, it is applied as the background colour of the content. The menu is removed after the user selects the colour */
  let changeColour = (ev) => {
    let tag = ev.target;
    content.style.backgroundColor = tag.innerText;
    menu.classList.add("menu-off");
  };

  /*sets back the content's background colour to what it was initially, (white) */

  let resetIt = (ev) => {
    content.style.backgroundColor = "white";
  };

  //Event Listeners

  content.addEventListener("contextmenu", addMenu);
  menu.addEventListener("click", changeColour);
  resetColor.addEventListener("click", resetIt);

  /* when the user clicks outside the content then the menu is removed*/
  document.addEventListener("click", () => {
    menu.classList.add("menu-off");
  });
});
