document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const email = document.getElementById('email').value;

    
    localStorage.setItem('subscribedEmail', email);

    
    alert(`Te has suscrito exitosamente con el correo: ${email}`);

    
    document.getElementById('email').value = '';


});

let currentIndex = 0;

function showImage(index) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}



let currentSlide = 0;

function showSlide(index) {
    const track = document.querySelector('.carousel-track');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    const itemsPerSlide = 6;

    if (index >= Math.ceil(totalItems / itemsPerSlide)) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = Math.ceil(totalItems / itemsPerSlide) - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    track.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}
