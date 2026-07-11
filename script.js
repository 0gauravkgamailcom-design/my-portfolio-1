// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Initial styles for animation
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

// Typing Effect
const text = "Front-End Web Developer";
let index = 0;

function typingEffect() {
    const heading = document.querySelector("#home h3");

    if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typingEffect, 100);
    }
}

document.querySelector("#home h3").textContent = "";
typingEffect();