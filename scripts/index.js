// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');
    
    // Animate Links
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Add Animation to hamburger
document.querySelectorAll('.hamburger').forEach(hamburger => {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('toggle');
    });
});

// Close mobile nav when clicking a link
navLinks.addEventListener('click', () => {
    if (navLinks.classList.contains('nav-active')) {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
        
        links.forEach(link => {
            link.style.animation = '';
        });
    }
});

// Navbar color change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 100) {
        navbar.style.background = 'white';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Tab functionality for experiences and awards sections
function setupTabs(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    const tabs = container.querySelectorAll('.tab');
    const contents = container.querySelectorAll('.content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Add active class to corresponding content
            const contentId = tab.getAttribute('data-id');
            const content = container.querySelector(`#${contentId}`);
            if (content) {
                content.classList.add('active');
            }
        });
    });
}

// Setup tabs for both experiences and awards sections
document.addEventListener('DOMContentLoaded', () => {
    setupTabs('.experience-container');
    setupTabs('.awards-container');
    
    // Initialize AOS for animations (if you decide to add it later)
    // if (typeof AOS !== 'undefined') {
    //     AOS.init({
    //         duration: 1000,
    //         once: true
    //     });
    // }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill out all required fields.');
            return;
        }
        
        // Here you would normally send the form data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset the form
        this.reset();
    });
}

// Project cards hover effect enhancement
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Typewriter effect for the name in the about section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typewriter effect to the name
const nameElement = document.querySelector('.about-text h1 span');
if (nameElement) {
    const originalName = nameElement.textContent;
    window.addEventListener('load', () => {
        typeWriter(nameElement, originalName);
    });
}

// Scroll to top button functionality
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '&uarr;';
scrollTopBtn.classList.add('scroll-top-btn');
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '20px';
scrollTopBtn.style.right = '20px';
scrollTopBtn.style.display = 'none';
scrollTopBtn.style.backgroundColor = '#4169e1';
scrollTopBtn.style.color = 'white';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '50%';
scrollTopBtn.style.width = '50px';
scrollTopBtn.style.height = '50px';
scrollTopBtn.style.fontSize = '20px';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.zIndex = '999';
scrollTopBtn.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';

document.body.appendChild(scrollTopBtn);

// Show/hide the scroll-to-top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Enable horizontal scrolling with mouse wheel for projects section
const projectsSlider = document.querySelector('.projects-slider');
if (projectsSlider) {
    projectsSlider.addEventListener('wheel', (e) => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            projectsSlider.scrollLeft += e.deltaY;
        }
    }, { passive: false });
}

// Footer color change based on the time of day
function updateFooterColor() {
    const contactSection = document.getElementById('contact');
    const hour = new Date().getHours();
    
    if (hour >= 6 && hour < 12) {
        // Morning - Blue
        contactSection.style.backgroundColor = '#1e3a8a';
    } else if (hour >= 12 && hour < 18) {
        // Afternoon - Purple
        contactSection.style.backgroundColor = '#5b21b6';
    } else {
        // Evening/Night - Dark
        contactSection.style.backgroundColor = '#111827';
    }
}

// Update footer color on load and every hour
updateFooterColor();
setInterval(updateFooterColor, 3600000); // 1 hour