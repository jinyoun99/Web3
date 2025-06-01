// js/main.js
// Preloader simulation
const preloader = document.getElementById('preloader');
const progressBar = document.getElementById('preloader-progress');

let progress = 0;
const interval = setInterval(() => {
    progress += 5;
    progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
            preloader.classList.add('hidden');
            
            // Trigger hero animations
            document.getElementById('hero').classList.add('animate');
        }, 500);
    }
}, 100);

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.1 });

// Observe all sections
document.querySelectorAll('.section-header, .card, .feature, .stats').forEach(el => {
    observer.observe(el);
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    // Menu functionality would go here
});

// Modal functionality
function openModal(imageId) {
    const modal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    
    // Set image based on which gallery item was clicked
    switch(imageId) {
        case 'gallery1':
            modalImage.src = 'assets/images/gallery/design.jpg';
            break;
        case 'gallery2':
            modalImage.src = 'assets/images/gallery/interior.jpg';
            break;
        case 'gallery3':
            modalImage.src = 'assets/images/gallery/cockpit.jpg';
            break;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('gallery-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modal = document.getElementById('gallery-modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    
    // In a real app, you would send this to a server
    alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`);
    e.target.reset();
}); 
