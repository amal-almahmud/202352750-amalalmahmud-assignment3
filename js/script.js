
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const contactFields = [
    {
        input: nameInput,
        error: document.querySelector("#name-error")
    },
    {
        input: emailInput,
        error: document.querySelector("#email-error")
    },
    {
        input: messageInput,
        error: document.querySelector("#message-error")
    }
];

function showStatus(message = "", type = "") {
    formStatus.textContent = message;
    formStatus.classList.remove("success", "error");

    if (type) {
        formStatus.classList.add(type);
    }
}

function getFieldError(input) {
    const value = input.value.trim();

    if (input === nameInput) {
        if (!value) {
            return "Please enter your name.";
        }

        const namePattern = /^[\p{L}\p{M}\s'-]+$/u;
        const letters = value.match(/\p{L}/gu) || [];

        if (letters.length < 2 || !namePattern.test(value)) {
            return "Use at least two letters; spaces, apostrophes and hyphens are allowed.";
        }
    }

    if (input === emailInput) {
        if (!value) {
            return "Please enter your email address.";
        }

        if (input.validity.typeMismatch) {
            return "Please enter a valid email address.";
        }
    }

    if (input === messageInput && !value) {
        return "Please enter a message.";
    }

    return "";
}
function setFieldError(field, message) {
    field.error.textContent = message;

    if (message) {
        field.input.setAttribute("aria-invalid", "true");
    } else {
        field.input.removeAttribute("aria-invalid");
    }
}
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    showStatus();

    const allEmpty = contactFields.every(function (field) {
        return field.input.value.trim() === "";
    });

    if (allEmpty) {
        contactFields.forEach(function (field) {
            setFieldError(field, "");
        });

        showStatus("Please complete all fields.", "error");
        nameInput.focus();
        return;
    }

    let firstInvalid = null;

    contactFields.forEach(function (field) {
        const error = getFieldError(field.input);

        setFieldError(field, error);

        if (error && !firstInvalid) {
            firstInvalid = field.input;
        }
    });

    if (firstInvalid) {
        firstInvalid.focus();
        return;
    }

    const name = nameInput.value.trim();

    contactForm.reset();
    showStatus("Thank you, " + name + "!", "success");
});

contactFields.forEach(function (field) {
    field.input.addEventListener("input", function () {
        showStatus();

        if (field.error.textContent) {
            setFieldError(field, getFieldError(field.input));
        }
    });
});

// Typing Effect
const typingText = document.querySelector("#typing-text");
const roleText = "Software Engineer";

let letterIndex = 0;

function typingEffect() {
    letterIndex++;
    typingText.textContent = roleText.slice(0, letterIndex);

    if (letterIndex < roleText.length) {
        setTimeout(typingEffect, 100);
    } else {
        setTimeout(function () {
            typingText.textContent = "";
            letterIndex = 0;

            setTimeout(typingEffect, 500);
        }, 1500);
    }
}

typingEffect();

// Interactive Skills Circle
const skillsOrbit = document.querySelector("#skills-orbit");
const skillsButton = document.querySelector("#skills-button");
const skillsItems = document.querySelector("#skills-items");

if (skillsOrbit && skillsButton && skillsItems) {
    function showSkills(open) {
        skillsOrbit.classList.toggle("is-open", open);

        skillsButton.setAttribute(
            "aria-expanded",
            String(open)
        );

        skillsItems.setAttribute(
            "aria-hidden",
            String(!open)
        );
    }

    skillsButton.addEventListener("pointerenter", function (event) {
        if (event.pointerType === "mouse") {
            showSkills(true);
        }
    });

    skillsOrbit.addEventListener("pointerleave", function (event) {
        if (event.pointerType === "mouse") {
            showSkills(false);
        }
    });

    skillsButton.addEventListener("click", function () {
        const isOpen =
            skillsButton.getAttribute("aria-expanded") === "true";

        showSkills(!isOpen);
    });

    skillsOrbit.addEventListener("focusout", function (event) {
        if (!skillsOrbit.contains(event.relatedTarget)) {
            showSkills(false);
        }
    });

    skillsOrbit.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            showSkills(false);
        }
    });

    document.addEventListener("pointerdown", function (event) {
        if (!skillsOrbit.contains(event.target)) {
            showSkills(false);
        }
    });
}

// GitHub API: UniLink
const githubContainer = document.querySelector("#github-repositories");
const githubStatus = document.querySelector("#github-status");
const githubRetry = document.querySelector("#github-retry");

async function loadUniLink() {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    githubStatus.textContent = "Loading UniLink...";
    githubContainer.setAttribute("aria-busy", "true");

    githubRetry.hidden = true;
    githubRetry.disabled = true;

    const previousCard = githubContainer.querySelector("#unilink-card");

    if (previousCard) {
        previousCard.remove();
    }

    try {
        const response = await fetch(
            "https://api.github.com/repos/amal-almahmud/UniLink",
            {
                headers: {
                    Accept: "application/vnd.github+json"
                },
                signal: controller.signal
            }
        );

        if (!response.ok) {
            throw new Error("GitHub request failed.");
        }

        const project = await response.json();

        if (
            !project ||
            typeof project.name !== "string" ||
            typeof project.html_url !== "string"
        ) {
            throw new Error("Unexpected GitHub response.");
        }

        // The entire card is one clickable link.
        const card = document.createElement("a");
        card.className = "project-card";
        card.id = "unilink-card";
        card.href = project.html_url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";

        // UniLink cover
        const cover = document.createElement("div");
        cover.className = "project-image unilink-cover";
        cover.setAttribute("aria-hidden", "true");

        const logo = document.createElement("span");
        logo.className = "unilink-logo";
        logo.textContent = "U";

        cover.append(logo);

        const title = document.createElement("h3");
        title.textContent = project.name;

        const description = document.createElement("p");
        description.className = "project-description";
        description.textContent =
            project.description ||
            "Explore the UniLink source code on GitHub.";

        const details = document.createElement("p");
        details.className = "project-meta";
        details.textContent = " · Frontend prototype";

        const action = document.createElement("strong");
        action.className = "project-action";
        action.textContent = "View on GitHub ↗";

        card.append(cover, title, description, details, action);
        githubContainer.append(card);

        githubStatus.textContent = "";
    } catch (error) {
        githubStatus.textContent =
            error.name === "AbortError"
                ? "GitHub took too long to respond. Please try again."
                : "Unable to load UniLink. Please try again later.";

        githubRetry.hidden = false;
    } finally {
        clearTimeout(timeout);
        githubContainer.setAttribute("aria-busy", "false");
        githubRetry.disabled = false;
    }
}

githubRetry.addEventListener("click", loadUniLink);
loadUniLink();