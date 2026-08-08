import "./styles.css";
import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";

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

const developerFooter = document.createElement("footer");
developerFooter.classList.add("developer-footer");

const developerCredit = document.createElement("p");
developerCredit.textContent = "\u00A9 " + new Date().getFullYear() + " Clebson Web Dev";

const developerLinks = document.createElement("div");
developerLinks.classList.add("developer-links");

const githubLink = document.createElement("a");
githubLink.href = "https://github.com/progritit";
githubLink.target = "_blank";
githubLink.rel = "noopener noreferrer";
githubLink.setAttribute("aria-label", "Visit Clebson Web Dev on GitHub");
const githubImage = document.createElement("img");
githubImage.src = githubIcon;
githubImage.alt = "";
githubLink.appendChild(githubImage);

const linkedinLink = document.createElement("a");
linkedinLink.href = "https://www.linkedin.com/in/clebsoncosta/";
linkedinLink.target = "_blank";
linkedinLink.rel = "noopener noreferrer";
linkedinLink.setAttribute("aria-label", "Visit Clebson Web Dev on LinkedIn");
const linkedinImage = document.createElement("img");
linkedinImage.src = linkedinIcon;
linkedinImage.alt = "";
linkedinLink.appendChild(linkedinImage);

developerLinks.appendChild(githubLink);
developerLinks.appendChild(linkedinLink);
developerFooter.appendChild(developerCredit);
developerFooter.appendChild(developerLinks);
document.body.appendChild(developerFooter);

showHome();