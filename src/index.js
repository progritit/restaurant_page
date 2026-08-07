import "./styles.css";
import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");
const reservationButton = document.querySelector("#reservation-button");

const navButtons = [homeButton, menuButton, contactButton];

function clearContent() {
    content.textContent = "";
}

function setActiveButton(activeButton) {
    for (let i = 0; i < navButtons.length; i += 1) {
        navButtons[i].classList.remove("active");
        navButtons[i].removeAttribute("aria-current");
    }

    activeButton.classList.add("active");
    activeButton.setAttribute("aria-current", "page");
}

function showHome() {
    clearContent();
    setActiveButton(homeButton);
    createHomePage(content, showMenu, showContact);
    window.scrollTo(0, 0);
}

function showMenu() {
    clearContent();
    setActiveButton(menuButton);
    createMenuPage(content);
    window.scrollTo(0, 0);
}

function showContact() {
    clearContent();
    setActiveButton(contactButton);
    createContactPage(content);
    window.scrollTo(0, 0);
}

homeButton.addEventListener("click", showHome);
menuButton.addEventListener("click", showMenu);
contactButton.addEventListener("click", showContact);
reservationButton.addEventListener("click", showContact);

showHome();