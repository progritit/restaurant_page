import diningRoom from "../assets/images/contact/helios-dining-room.webp";
import solarStarIcon from "../assets/icons/solar-star.svg";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import globeIcon from "../assets/icons/globe.svg";
import networkIcon from "../assets/icons/network.svg";
import locationIcon from "../assets/icons/location.svg";
import arrowRightIcon from "../assets/icons/arrow-right.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import heliosJournalIcon from "../assets/icons/helios-journal.svg";
import heliosEmblem from "../assets/icons/helios-emblem.svg";

function createInfoRow(iconSource, lines) {
    const row = document.createElement("div");
    row.classList.add("contact-info-row");

    const icon = document.createElement("img");
    icon.classList.add("contact-icon");
    icon.src = iconSource;
    icon.alt = "";

    const text = document.createElement("div");

    for (let i = 0; i < lines.length; i += 1) {
        const line = document.createElement("p");
        line.textContent = lines[i];
        text.appendChild(line);
    }

    row.appendChild(icon);
    row.appendChild(text);
    return row;
}

function createBottomColumn(title, lines) {
    const column = document.createElement("section");
    column.classList.add("contact-bottom-column");

    const heading = document.createElement("h2");
    const headingIcon = document.createElement("img");
    headingIcon.classList.add("heading-solar-icon");
    headingIcon.src = solarStarIcon;
    headingIcon.alt = "";
    const headingText = document.createElement("span");
    headingText.textContent = " " + title;
    heading.appendChild(headingIcon);
    heading.appendChild(headingText);
    column.appendChild(heading);

    for (let i = 0; i < lines.length; i += 1) {
        const line = document.createElement("p");
        line.textContent = lines[i];
        column.appendChild(line);
    }

    return column;
}

function createReservationForm() {
    const form = document.createElement("form");
    form.classList.add("reservation-form");

    const heading = document.createElement("h2");
    const headingIcon = document.createElement("img");
    headingIcon.classList.add("heading-solar-icon");
    headingIcon.src = solarStarIcon;
    headingIcon.alt = "";
    const headingText = document.createElement("span");
    headingText.textContent = "RESERVE YOUR TABLE";
    heading.appendChild(headingIcon);
    heading.appendChild(headingText);
    form.appendChild(heading);

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "guest-name");
    nameLabel.textContent = "NAME";
    const nameInput = document.createElement("input");
    nameInput.id = "guest-name";
    nameInput.name = "guest-name";
    nameInput.type = "text";
    nameInput.placeholder = "Your full name";
    nameInput.required = true;

    const guestsLabel = document.createElement("label");
    guestsLabel.setAttribute("for", "guest-count");
    guestsLabel.textContent = "GUESTS";
    const guestsSelect = document.createElement("select");
    guestsSelect.id = "guest-count";
    guestsSelect.name = "guest-count";
    const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5+ Guests"];
    for (let i = 0; i < guestOptions.length; i += 1) {
        const option = document.createElement("option");
        option.textContent = guestOptions[i];
        if (guestOptions[i] === "2 Guests") {
            option.selected = true;
        }
        guestsSelect.appendChild(option);
    }

    const dateTimeRow = document.createElement("div");
    dateTimeRow.classList.add("form-row");

    const dateGroup = document.createElement("div");
    dateGroup.classList.add("form-group");
    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "reservation-date");
    dateLabel.textContent = "DATE";
    const dateInput = document.createElement("input");
    dateInput.id = "reservation-date";
    dateInput.name = "reservation-date";
    dateInput.type = "date";
    dateInput.required = true;
    dateGroup.appendChild(dateLabel);
    dateGroup.appendChild(dateInput);

    const timeGroup = document.createElement("div");
    timeGroup.classList.add("form-group");
    const timeLabel = document.createElement("label");
    timeLabel.setAttribute("for", "reservation-time");
    timeLabel.textContent = "TIME";
    const timeSelect = document.createElement("select");
    timeSelect.id = "reservation-time";
    timeSelect.name = "reservation-time";
    const timeOptions = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];
    for (let i = 0; i < timeOptions.length; i += 1) {
        const option = document.createElement("option");
        option.textContent = timeOptions[i];
        if (timeOptions[i] === "7:00 PM") {
            option.selected = true;
        }
        timeSelect.appendChild(option);
    }
    timeGroup.appendChild(timeLabel);
    timeGroup.appendChild(timeSelect);

    dateTimeRow.appendChild(dateGroup);
    dateTimeRow.appendChild(timeGroup);

    const requestsLabel = document.createElement("label");
    requestsLabel.setAttribute("for", "special-requests");
    requestsLabel.textContent = "SPECIAL REQUESTS (OPTIONAL)";
    const requests = document.createElement("textarea");
    requests.id = "special-requests";
    requests.name = "special-requests";
    requests.rows = 3;
    requests.placeholder = "Dietary needs, celebrations, seating preferences...";

    const submitButton = document.createElement("button");
    submitButton.classList.add("gold-button", "reservation-submit");
    submitButton.type = "submit";
    submitButton.textContent = "REQUEST A TABLE";
    const submitIcon = document.createElement("img");
    submitIcon.classList.add("button-icon");
    submitIcon.src = solarStarIcon;
    submitIcon.alt = "";
    submitButton.appendChild(submitIcon);

    const note = document.createElement("p");
    note.classList.add("form-note");
    note.textContent =
        "Reservations are recommended. We'll confirm your request shortly via your preferred contact method.";

    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(guestsLabel);
    form.appendChild(guestsSelect);
    form.appendChild(dateTimeRow);
    form.appendChild(requestsLabel);
    form.appendChild(requests);
    form.appendChild(submitButton);
    form.appendChild(note);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    return form;
}

function createContactPage(content) {
    const page = document.createElement("div");
    page.classList.add("contact-page");

    const main = document.createElement("section");
    main.classList.add("contact-main");

    const image = document.createElement("img");
    image.classList.add("contact-hero-image");
    image.src = diningRoom;
    image.alt = "Helios Cantina dining room overlooking the Solaris city at sunset";

    const copy = document.createElement("div");
    copy.classList.add("contact-copy");

    const title = document.createElement("h1");
    title.innerHTML = "Your Table<br />Awaits the Light.";

    const divider = document.createElement("div");
    divider.classList.add("solar-divider");
    divider.setAttribute("aria-hidden", "true");
    const dividerLeft = document.createElement("span");
    const dividerStar = document.createElement("img");
    dividerStar.src = solarStarIcon;
    dividerStar.alt = "";
    const dividerRight = document.createElement("span");
    divider.appendChild(dividerLeft);
    divider.appendChild(dividerStar);
    divider.appendChild(dividerRight);

    const intro = document.createElement("p");
    intro.classList.add("contact-intro");
    intro.textContent =
        "We gather around the sun to share exceptional cuisine, warm hospitality, and a sense of wonder. Reserve your experience at Helios Cantina.";

    const getInTouch = document.createElement("h2");
    getInTouch.classList.add("contact-subheading");
    getInTouch.textContent = "GET IN TOUCH";

    copy.appendChild(title);
    copy.appendChild(divider);
    copy.appendChild(intro);
    copy.appendChild(getInTouch);
    copy.appendChild(createInfoRow(phoneIcon, ["+1 (888) HELIOS-1", "+1 (888) 435-4671"]));
    copy.appendChild(createInfoRow(mailIcon, ["hello@helioscantina.sol"]));
    copy.appendChild(createInfoRow(globeIcon, ["helioscantina.sol"]));
    copy.appendChild(createInfoRow(networkIcon, ["@helioscantina", "Solaris Network"]));

    const formWrapper = document.createElement("div");
    formWrapper.classList.add("form-wrapper");
    formWrapper.appendChild(createReservationForm());

    main.appendChild(image);
    main.appendChild(copy);
    main.appendChild(formWrapper);

    const bottom = document.createElement("div");
    bottom.classList.add("contact-bottom");

    const visit = createBottomColumn("VISIT US", [
        "Helios Orbital District \u00B7 Ring 3",
        "Solaris Station",
        "Above the Meridian Promenade",
        "Sol System",
    ]);
    const locationButton = document.createElement("button");
    locationButton.classList.add("small-outline-button");
    locationButton.type = "button";
    const locationButtonIcon = document.createElement("img");
    locationButtonIcon.src = locationIcon;
    locationButtonIcon.alt = "";
    const locationButtonText = document.createElement("span");
    locationButtonText.textContent = "VIEW LOCATION";
    locationButton.appendChild(locationButtonIcon);
    locationButton.appendChild(locationButtonText);
    visit.appendChild(locationButton);

    const hours = createBottomColumn("HOURS OF LIGHT", [
        "Monday                                      Closed",
        "Tuesday \u2013 Thursday          5:00 PM \u2013 11:00 PM",
        "Friday \u2013 Saturday             5:00 PM \u2013 12:30 AM",
        "Sunday                                  5:00 PM \u2013 10:00 PM",
        "Hours follow the Solaris Standard (SS).",
    ]);
    hours.classList.add("hours-column");

    const events = createBottomColumn("PRIVATE EVENTS", [
        "Host your next orbit in an unforgettable setting. We offer custom experiences for celebrations, corporate gatherings, and intimate events.",
    ]);
    const inquireButton = document.createElement("button");
    inquireButton.classList.add("small-outline-button");
    inquireButton.type = "button";
    inquireButton.textContent = "INQUIRE NOW";
    const inquireIcon = document.createElement("img");
    inquireIcon.classList.add("button-icon");
    inquireIcon.src = solarStarIcon;
    inquireIcon.alt = "";
    inquireButton.appendChild(inquireIcon);
    events.appendChild(inquireButton);

    const connected = createBottomColumn("STAY CONNECTED", [
        "Receive seasonal menus, invitations, and stories from the Solaris Network.",
    ]);
    const emailRow = document.createElement("div");
    emailRow.classList.add("email-row");
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.setAttribute("aria-label", "Email address");
    emailInput.placeholder = "Your email address";
    const emailButton = document.createElement("button");
    emailButton.type = "button";
    emailButton.setAttribute("aria-label", "Join mailing list");
    const emailButtonIcon = document.createElement("img");
    emailButtonIcon.src = arrowRightIcon;
    emailButtonIcon.alt = "";
    emailButton.appendChild(emailButtonIcon);
    emailRow.appendChild(emailInput);
    emailRow.appendChild(emailButton);
    connected.appendChild(emailRow);

    const socials = document.createElement("div");
    socials.classList.add("socials");

    const instagramSocial = document.createElement("span");
    instagramSocial.setAttribute("aria-label", "Instagram");
    const instagramImage = document.createElement("img");
    instagramImage.src = instagramIcon;
    instagramImage.alt = "";
    instagramSocial.appendChild(instagramImage);

    const networkSocial = document.createElement("span");
    networkSocial.setAttribute("aria-label", "Solaris Network");
    const networkImage = document.createElement("img");
    networkImage.src = networkIcon;
    networkImage.alt = "";
    networkSocial.appendChild(networkImage);

    const journalSocial = document.createElement("span");
    journalSocial.setAttribute("aria-label", "Helios Journal");
    const journalImage = document.createElement("img");
    journalImage.src = heliosJournalIcon;
    journalImage.alt = "";
    journalSocial.appendChild(journalImage);

    socials.appendChild(instagramSocial);
    socials.appendChild(networkSocial);
    socials.appendChild(journalSocial);
    connected.appendChild(socials);

    bottom.appendChild(visit);
    bottom.appendChild(hours);
    bottom.appendChild(events);
    bottom.appendChild(connected);

    const footer = document.createElement("footer");
    footer.classList.add("site-footer");

    const copyright = document.createElement("p");
    copyright.textContent = "\u00A9 " + new Date().getFullYear() + " Helios Cantina. All rights reserved.";

    const footerBrand = document.createElement("div");
    footerBrand.classList.add("footer-brand");
    const footerEmblem = document.createElement("img");
    footerEmblem.classList.add("footer-emblem");
    footerEmblem.src = heliosEmblem;
    footerEmblem.alt = "";
    const footerName = document.createElement("strong");
    footerName.textContent = "HELIOS CANTINA";
    const footerTagline = document.createElement("small");
    footerTagline.textContent = "Solar Gastronomy \u00B7 Solaris Network";
    footerBrand.appendChild(footerEmblem);
    footerBrand.appendChild(footerName);
    footerBrand.appendChild(footerTagline);

    const footerLinks = document.createElement("div");
    footerLinks.classList.add("footer-links");
    footerLinks.innerHTML = "<span>Privacy Policy</span><span>Terms of Service</span><span>Accessibility</span>";

    footer.appendChild(copyright);
    footer.appendChild(footerBrand);
    footer.appendChild(footerLinks);

    page.appendChild(main);
    page.appendChild(bottom);
    page.appendChild(footer);
    content.appendChild(page);
}

export { createContactPage };