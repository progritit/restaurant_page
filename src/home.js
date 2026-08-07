import homeHero from "../assets/images/home/home-hero.webp";
import solarFlora from "../assets/images/home/solar-flora.webp";
import orbitalProvisions from "../assets/images/home/orbital-provisions.webp";
import stellarFinishes from "../assets/images/home/stellar-finishes.webp";

function createExperienceCard(imageSource, imageAlt, title, description, symbol) {
    const card = document.createElement("article");
    card.classList.add("experience-card");

    const image = document.createElement("img");
    image.classList.add("experience-image");
    image.src = imageSource;
    image.alt = imageAlt;

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("experience-card-footer");

    const icon = document.createElement("span");
    icon.classList.add("experience-icon");
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = symbol;

    const copy = document.createElement("div");

    const heading = document.createElement("h3");
    heading.textContent = title;

    const text = document.createElement("p");
    text.textContent = description;

    copy.appendChild(heading);
    copy.appendChild(text);
    cardFooter.appendChild(icon);
    cardFooter.appendChild(copy);
    card.appendChild(image);
    card.appendChild(cardFooter);

    return card;
}

function createHomePage(content, showMenu, showContact) {
    const page = document.createElement("div");
    page.classList.add("home-page");

    const hero = document.createElement("section");
    hero.classList.add("home-hero");

    const heroImage = document.createElement("img");
    heroImage.classList.add("home-hero-image");
    heroImage.src = homeHero;
    heroImage.alt = "Helios Cantina dining room overlooking the Solaris skyline";

    const heroShade = document.createElement("div");
    heroShade.classList.add("home-hero-shade");
    heroShade.setAttribute("aria-hidden", "true");

    const heroContent = document.createElement("div");
    heroContent.classList.add("home-hero-content");

    const title = document.createElement("h1");
    title.innerHTML = "Culinary Rituals.<br />Solar Sophistication.";

    const divider = document.createElement("div");
    divider.classList.add("solar-divider");
    divider.setAttribute("aria-hidden", "true");
    divider.innerHTML = "<span></span><b>âœ¦</b><span></span>";

    const intro = document.createElement("p");
    intro.classList.add("hero-intro");
    intro.textContent =
        "Helios Cantina is where the Solaris Network gathers to celebrate flavor, forge connections, and find balance after the mission.";

    const heroButtons = document.createElement("div");
    heroButtons.classList.add("hero-buttons");

    const menuButton = document.createElement("button");
    menuButton.classList.add("gold-button");
    menuButton.type = "button";
    menuButton.innerHTML = "EXPLORE THE MENU <span aria-hidden=\"true\">âœ¦</span>";
    menuButton.addEventListener("click", showMenu);

    const reservationButton = document.createElement("button");
    reservationButton.classList.add("outline-button");
    reservationButton.type = "button";
    reservationButton.textContent = "RESERVATIONS";
    reservationButton.addEventListener("click", showContact);

    heroButtons.appendChild(menuButton);
    heroButtons.appendChild(reservationButton);
    heroContent.appendChild(title);
    heroContent.appendChild(divider);
    heroContent.appendChild(intro);
    heroContent.appendChild(heroButtons);
    hero.appendChild(heroImage);
    hero.appendChild(heroShade);
    hero.appendChild(heroContent);

    const experience = document.createElement("section");
    experience.classList.add("home-experience");

    const experienceHeading = document.createElement("div");
    experienceHeading.classList.add("section-heading");

    const eyebrow = document.createElement("p");
    eyebrow.classList.add("eyebrow");
    eyebrow.innerHTML = "<span aria-hidden=\"true\">âœ¦</span> THE HELIOS EXPERIENCE";

    const experienceTitle = document.createElement("h2");
    experienceTitle.textContent = "Ingredients from the Sun. Crafted for You.";

    const experienceText = document.createElement("p");
    experienceText.textContent =
        "Our cuisine honors Solarisâ€”its elements, its cultures, its explorers.";

    experienceHeading.appendChild(eyebrow);
    experienceHeading.appendChild(experienceTitle);
    experienceHeading.appendChild(experienceText);

    const cards = document.createElement("div");
    cards.classList.add("experience-grid");
    cards.appendChild(
        createExperienceCard(
            solarFlora,
            "Solar Flora plant-forward dish",
            "SOLAR FLORA",
            "Vibrant. Seasonal. Harmonious.",
            "â§",
        ),
    );
    cards.appendChild(
        createExperienceCard(
            orbitalProvisions,
            "Orbital Provisions signature dish",
            "ORBITAL PROVISIONS",
            "Sourced beyond. Refined within.",
            "âŠ™",
        ),
    );
    cards.appendChild(
        createExperienceCard(
            stellarFinishes,
            "Stellar Finishes crystal sphere dessert",
            "STELLAR FINISHES",
            "Sweet moments. Lasting impressions.",
            "â—’",
        ),
    );

    const discoverButton = document.createElement("button");
    discoverButton.classList.add("text-button");
    discoverButton.type = "button";
    discoverButton.textContent = "DISCOVER THE FULL MENU  â†’";
    discoverButton.addEventListener("click", showMenu);

    experience.appendChild(experienceHeading);
    experience.appendChild(cards);
    experience.appendChild(discoverButton);

    page.appendChild(hero);
    page.appendChild(experience);
    content.appendChild(page);
}

export { createHomePage };