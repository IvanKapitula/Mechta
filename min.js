const popup = document.querySelector(".popup");
const navList = document.querySelector(".nav-list");
const navContacts = document.querySelector(".nav-contacts");
const logo = document.querySelector(".logo");
const navListItems = document.querySelectorAll(".nav-list__item");
const popupItem1 = document.querySelector(".popup-item:nth-child(1)");
const popupItem2 = document.querySelector(".popup-item:nth-child(2)");
const popupItem3 = document.querySelector(".popup-item:nth-child(3)");
const popupItem4 = document.querySelector(".popup-item:nth-child(4)");
const mediaQueryOpen = window.matchMedia("(min-width: 906px)");

let flag = false;

popup.addEventListener("click", changeMenu);

function changeMenu() {
  if (!flag) {
    openMenu();
  } else {
    closeMenu();
  }
}

function openMenu() {
  flag = true;
  navList.style.display = "flex";
  popupItem1.style.transform = "rotate(135deg)";
  popupItem2.style.transform = "rotate(225deg)";
  popupItem3.style.display = "none";
  popupItem4.style.display = "none";
  popupItem2.style.marginTop = "-7px";
  popup.style.marginTop = "25px";

  console.log(flag);
}
function closeMenu() {
  flag = false;
  navList.style.display = "none";
  popupItem1.style.transform = "rotate(0)";
  popupItem2.style.transform = "rotate(0)";
  popupItem3.style.display = "block";
  popupItem4.style.display = "block";
  popupItem2.style.marginTop = "8px";
  popup.style.marginTop = "0";
  console.log(flag);
}
