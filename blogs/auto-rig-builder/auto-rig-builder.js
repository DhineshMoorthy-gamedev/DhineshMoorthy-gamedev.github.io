// auto-rig-builder.js - Based on addressables.js
function copyCode(id) {
    const code = document.getElementById(id).innerText;
    const button = event.target;

    navigator.clipboard.writeText(code).then(() => {
        const original = button.innerText;
        button.innerText = "Copied!";

        setTimeout(() => {
            button.innerText = original;
        }, 1500);
    });
}

function toggleCode(button) {
    const block = button.closest(".code-block");
    const content = block.querySelector(".code-content");

    if (content.style.maxHeight === "none") {
        content.style.maxHeight = "400px";
        button.innerText = "Show All";
    } else {
        content.style.maxHeight = "none";
        button.innerText = "Hide";
    }
}

// Back to Top functionality
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('backToTop');
    if (btn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// Animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

console.log('🦴 Auto Rig Builder Blog loaded successfully!');
