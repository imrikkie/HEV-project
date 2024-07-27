// JavaScript for sliding window of event photos
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slider img');
    const maxSlides = slides.length;

    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > maxSlides) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();

function nextSlide() {
    const slides = document.querySelectorAll('.slider img');
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}

function prevSlide() {
    const slides = document.querySelectorAll('.slider img');
    slideIndex--;
    if (slideIndex < 1) { slideIndex = slides.length; }
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}

// JavaScript for social links on team member images
function openSocial(socialLink) {
    // Replace with actual social media links
    const socialLinks = {
        'social_link_1': 'https://example.com/member1',
        'social_link_2': 'https://example.com/member2',
        'social_link_3': 'https://example.com/member3'
    };
    window.open(socialLinks[socialLink], '_blank');
}

// JavaScript for three dots clicking panel
const panelToggle = document.querySelector('.panel-toggle');
const panelMenu = document.querySelector('.panel-menu');

panelToggle.addEventListener('click', () => {
    panelMenu.classList.toggle('show-menu');
});

// Close panel menu if clicked outside
window.addEventListener('mouseup', (event) => {
    if (!panelMenu.contains(event.target) && !panelToggle.contains(event.target)) {
        panelMenu.classList.remove('show-menu');
    }
});
