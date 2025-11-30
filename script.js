const contactForm = document.getElementById('contact-form-id'); 
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();

        if (nameInput === '' || emailInput === '') {
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
        } else {
            messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
            messageDiv.style.color = 'green';
            contactForm.reset();
        }
    });
}


function openMenu() {
    document.querySelector(".nav-list").style.display = "flex";
    document.getElementById("menu-button").style.display = "none";
    document.getElementById("close-btn").style.display = "block";
}

function closeMenu() {
    document.querySelector(".nav-list").style.display = "none";
    document.getElementById("menu-button").style.display = "block";
    document.getElementById("close-btn").style.display = "none";
}
