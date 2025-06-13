/**
 * Handle Contact Form Submission with AWS Backend
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
 * Handle Contact Form Submission to AWS Lambda
 */
async function handleFormSubmission() {
    const form = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');
    const statusMessage = document.getElementById('status-message');
    const submitButton = form.querySelector('button[type="submit"]');

    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        role: formData.get('role'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

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
        // Replace with your actual API Gateway endpoint
        const API_ENDPOINT = 'https://3d9zoun2z1.execute-api.us-east-1.amazonaws.com/prod/contact';

        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok && result.success) {
            showFormStatus('success', result.message);
            form.reset();

            // Hide status after 10 seconds
            setTimeout(() => {
                statusDiv.style.display = 'none';
            }, 10000);
        } else {
            showFormStatus('error', result.message || 'There was an error sending your message.');
        }

    } catch (error) {
        console.error('Form submission error:', error);
        showFormStatus('error', 'There was an error sending your message. Please try again or email me directly.');
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

    statusDiv.className = `form-status ${type}`;
    statusMessage.textContent = message;
    statusDiv.style.display = 'block';

    // Scroll to status message
    statusDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Validate Email Address
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}