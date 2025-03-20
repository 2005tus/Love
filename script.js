// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('show');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('show')) {
                    nav.classList.remove('show');
                }
            }
        });
    });
    
    // Add additional CSS for mobile menu when active
    const style = document.createElement('style');
    style.innerHTML = `
        @media screen and (max-width: 768px) {
            nav ul.show {
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 70px;
                left: 0;
                width: 100%;
                background-color: rgba(255, 255, 255, 0.95);
                box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                padding: 20px 0;
                z-index: 1000;
            }
            
            nav ul.show li {
                margin: 10px 0;
                text-align: center;
            }
        }
    `;
    document.head.appendChild(style);
});

// Scroll to top button



