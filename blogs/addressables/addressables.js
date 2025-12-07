// Copy code functionality
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





// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in animation on scroll
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

// Apply fade-in to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section, .best-practices, .troubleshooting, .cta');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Add syntax highlighting effect to code blocks
function highlightCode() {
    const codeBlocks = document.querySelectorAll('.code-block code');
    
    codeBlocks.forEach(block => {
        let html = block.innerHTML;
        
        // Simple syntax highlighting patterns
        // Comments
        html = html.replace(/(\/\/.*$)/gm, '<span style="color: #6a9955;">$1</span>');
        html = html.replace(/(\/\*[\s\S]*?\*\/)/g, '<span style="color: #6a9955;">$1</span>');
        
        // Strings
        html = html.replace(/(".*?")/g, '<span style="color: #ce9178;">$1</span>');
        
        // Keywords
        const keywords = ['function', 'const', 'let', 'var', 'if', 'else', 'for', 'return', 'using', 
                         'public', 'private', 'class', 'void', 'async', 'await', 'new', 'static',
                         'try', 'catch', 'while'];
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b(${keyword})\\b`, 'g');
            html = html.replace(regex, '<span style="color: #569cd6;">$1</span>');
        });
        
        // Numbers
        html = html.replace(/\b(\d+\.?\d*)\b/g, '<span style="color: #b5cea8;">$1</span>');
        
        block.innerHTML = html;
    });
}

// Initialize syntax highlighting
document.addEventListener('DOMContentLoaded', highlightCode);

// Add reading progress indicator
function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '4px';
    progressBar.style.background = 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

document.addEventListener('DOMContentLoaded', createProgressBar);

// Add active state to code blocks on hover
document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
        });
        
        block.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        });
        
        block.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
});

// Add click animation to practice cards
document.addEventListener('DOMContentLoaded', () => {
    const practices = document.querySelectorAll('.practice');
    
    practices.forEach(practice => {
        practice.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
        
        practice.style.transition = 'transform 0.15s ease';
        practice.style.cursor = 'pointer';
    });
});

// Table of contents generator (optional)
function generateTableOfContents() {
    const headers = document.querySelectorAll('article h2');
    if (headers.length === 0) return;
    
    const toc = document.createElement('nav');
    toc.className = 'table-of-contents';
    toc.innerHTML = '<h3>Table of Contents</h3>';
    
    const tocList = document.createElement('ul');
    
    headers.forEach((header, index) => {
        const id = `section-${index}`;
        header.id = id;
        
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = header.textContent;
        li.appendChild(a);
        tocList.appendChild(li);
    });
    
    toc.appendChild(tocList);
    
    const intro = document.querySelector('.intro');
    if (intro) {
        intro.parentNode.insertBefore(toc, intro.nextSibling);
    }
}

// Uncomment to enable table of contents
// document.addEventListener('DOMContentLoaded', generateTableOfContents);

// Add print styles handler
window.addEventListener('beforeprint', () => {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.style.display = 'none';
    });
});

window.addEventListener('afterprint', () => {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.style.display = 'inline-block';
    });
});

// Performance: Lazy load code highlighting for long pages
let codeHighlightingDone = false;

window.addEventListener('scroll', () => {
    if (!codeHighlightingDone && window.scrollY > 100) {
        highlightCode();
        codeHighlightingDone = true;
    }
}, { once: true });

console.log('🎮 Unity Remote Config Blog loaded successfully!');
console.log('💡 Ready to build awesome games with dynamic configuration!');


function toggleCode(button) {
    const block = button.closest(".collapsible");

    block.classList.toggle("expanded");

    if (block.classList.contains("expanded")) {
        button.innerText = "Hide";
    } else {
        button.innerText = "Show";
    }
}

