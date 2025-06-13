// main.js - Complete Portfolio Website JavaScript with Working Contact Form

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Mobile Navigation Toggle
    initMobileNavigation();

    // Contact Form Handling (FIXED VERSION)
    initContactForm();

    // Smooth Scrolling for Anchor Links
    initSmoothScrolling();

    // Animation on Scroll
    initScrollAnimations();

    // Typing Animation for Hero Section
    initTypingAnimation();

    // Additional functionality
    updateFooterYear();
    initKeyboardNavigation();
    initPerformanceMonitoring();
    initErrorHandling();
    addAnimationClasses();

    console.log('Portfolio website loaded successfully! 🚀');
});

/**
 * Initialize Mobile Navigation
 */
function initMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

/**
 * Initialize Contact Form (FIXED VERSION WITH BACKEND)
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            handleFormSubmission();
        });
    }
}

/**
 * Handle Contact Form Submission to AWS Lambda (WORKING VERSION)
 */
async function handleFormSubmission() {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    const statusMessage = document.getElementById('status-message');
    const submitButton = form.querySelector('button[type="submit"]');

    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name')?.trim() || '',
        email: formData.get('email')?.trim() || '',
        company: formData.get('company')?.trim() || '',
        role: formData.get('role')?.trim() || '',
        subject: formData.get('subject')?.trim() || '',
        message: formData.get('message')?.trim() || ''
    };

    console.log('Form data collected:', data);

    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        showFormStatus('error', 'Please fill in all required fields.');
        return;
    }

    if (!isValidEmail(data.email)) {
        showFormStatus('error', 'Please enter a valid email address.');
        return;
    }

    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    showFormStatus('info', 'Sending your message...');

    try {
        // REPLACE THIS WITH YOUR ACTUAL API GATEWAY ENDPOINT
        const API_ENDPOINT = 'https://43sug4dn9a.execute-api.us-east-1.amazonaws.com/prod/contact';

        console.log('Making API call to:', API_ENDPOINT);
        console.log('Sending data:', JSON.stringify(data));

        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        console.log('Response received:', {
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries())
        });

        let result;
        try {
            const responseText = await response.text();
            console.log('Raw response text:', responseText);
            result = JSON.parse(responseText);
            console.log('Parsed result:', result);
        } catch (parseError) {
            console.error('Error parsing response:', parseError);
            throw new Error('Invalid response format from server');
        }

        if (response.ok) {
            // Success case
            if (result.success !== false) {
                showFormStatus('success', result.message || 'Thank you for your message! I\'ll get back to you within 24 hours.');
                form.reset();

                // Hide status after 10 seconds
                setTimeout(() => {
                    if (statusDiv) statusDiv.style.display = 'none';
                }, 10000);
            } else {
                // API returned success=false
                showFormStatus('error', result.message || 'There was an error sending your message.');
            }
        } else {
            // HTTP error status
            showFormStatus('error', result.message || `Server error (${response.status}): ${response.statusText}`);
        }

    } catch (error) {
        console.error('Form submission error:', error);

        // Check if it's a network error
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            showFormStatus('error', 'Network error. Please check your internet connection and try again.');
        } else if (error.message.includes('CORS')) {
            showFormStatus('error', 'Configuration error. Please try again later or email me directly.');
        } else {
            showFormStatus('error', 'There was an error sending your message. Please try again or email me directly.');
        }
    } finally {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

/**
 * Show Form Status Message
 */
function showFormStatus(type, message) {
    const statusDiv = document.getElementById('form-status');
    const statusMessage = document.getElementById('status-message');

    if (!statusDiv || !statusMessage) {
        console.error('Status elements not found');
        alert(message); // Fallback
        return;
    }

    statusDiv.className = `form-status ${type}`;
    statusMessage.textContent = message;
    statusDiv.style.display = 'block';

    // Scroll to status message
    statusDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    console.log(`Status shown: ${type} - ${message}`);
}

/**
 * Validate Email Address
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Initialize Smooth Scrolling
 */
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                const headerOffset = 80; // Account for fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize Scroll Animations
 */
function initScrollAnimations() {
    // Only run if user hasn't requested reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.skill-card, .project-card, .cert-card, .timeline-item');
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }
}

/**
 * Initialize Typing Animation for Hero Section
 */
function initTypingAnimation() {
    const heroSubtitle = document.querySelector('.hero-subtitle');

    if (heroSubtitle && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const originalText = heroSubtitle.textContent;
        const words = ['AWS Cloud Engineer', 'Solutions Architect', 'DevOps Specialist', 'Cloud Consultant'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                heroSubtitle.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                heroSubtitle.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before typing next word
            }

            setTimeout(typeWriter, typeSpeed);
        }

        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }
}

/**
 * Add Dynamic Year to Footer
 */
function updateFooterYear() {
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
    }
}

/**
 * Add Keyboard Navigation Support
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', function (event) {
        // Close mobile menu on Escape
        if (event.key === 'Escape') {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');

            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }

        // Skip to main content (accessibility)
        if (event.key === 'Tab' && event.target.tagName === 'BODY') {
            const mainContent = document.querySelector('main');
            if (mainContent) {
                mainContent.focus();
            }
        }
    });
}

/**
 * Add Performance Monitoring
 */
function initPerformanceMonitoring() {
    // Log page load time
    window.addEventListener('load', function () {
        const loadTime = performance.now();
        console.log(`Page loaded in ${Math.round(loadTime)}ms`);
    });

    // Monitor for layout shifts (Core Web Vitals)
    if ('PerformanceObserver' in window) {
        try {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.entryType === 'layout-shift') {
                        console.log('Layout shift detected:', entry.value);
                    }
                }
            });

            observer.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
            // Ignore if layout-shift is not supported
        }
    }
}

/**
 * Initialize Error Handling
 */
function initErrorHandling() {
    window.addEventListener('error', function (event) {
        console.error('JavaScript error:', event.error);
    });

    window.addEventListener('unhandledrejection', function (event) {
        console.error('Unhandled promise rejection:', event.reason);
    });
}

/**
 * Add CSS Classes for Animation
 */
function addAnimationClasses() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @media (prefers-reduced-motion: reduce) {
            .animate-in {
                animation: none;
            }
        }
        
        /* Mobile Navigation Styles */
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background-color: white;
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
                z-index: 999;
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .nav-menu .nav-link {
                padding: 1rem;
                display: block;
                border-bottom: 1px solid #eee;
            }
            
            .hamburger.active span:nth-child(2) {
                opacity: 0;
            }
            
            .hamburger.active span:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
            
            .hamburger.active span:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        handleFormSubmission,
        initMobileNavigation,
        initContactForm
    };
}