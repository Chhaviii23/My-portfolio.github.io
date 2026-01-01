// Typing Effect
const text = "Front-End Developer | Problem Solver";
let index = 0;

const typingElement = document.getElementById("typing-text");

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}


// Dark / Light Mode
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
    if (body.hasAttribute("data-theme")) {
        body.removeAttribute("data-theme");
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        body.setAttribute("data-theme", "dark");
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});


// Scroll Logic
window.onscroll = () => {
    const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progress-line").style.width =
        scrolled + "%";

    const backToTop = document.getElementById("backToTop");
    backToTop.style.display = winScroll > 400 ? "block" : "none";

    handleScrollAnimations();
};

document.getElementById("backToTop").onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

function handleScrollAnimations() {
    document.querySelectorAll(".reveal").forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 150) {
            section.classList.add("active");
        }
    });

    const skillsSection = document.getElementById("skills");

    if (skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
        document.querySelectorAll(".skill-fill").forEach(fill => {
            fill.style.width = fill.getAttribute("data-width");
        });
    }
}


// Project Interactions

// 1. Task Tracker: Redirect to GitHub Pages
document
    .getElementById("project-tasktracker")
    .addEventListener("click", () => {
        window.open(
            "https://chhaviii23.github.io/OIBSIP_WebDevelopmentAndDesigning_Task3/",
            "_blank"
        );
    });

// 2. Portfolio Website: Informational Popup
document
    .getElementById("project-portfolio")
    .addEventListener("click", () => {
        alert(
            "Project Overview: You are currently navigating the live version of this Portfolio Website. This interface demonstrates the integration of modern web technologies to create a functional and responsive professional showcase."
        );
    });


// On Load
window.onload = () => {
    typeEffect();
    handleScrollAnimations();
};
