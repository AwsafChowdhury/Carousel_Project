// Carousel Data
let books = [];

// Configuration
const visibleCards = 3; // X or Number of cards visible at a time
let currentIndex = 0; // Starting index of the carousel
let autoRotationTimer;

// Fetch book data from JSON and initialize the carousel
fetch('book-description.json')
    .then((response) => response.json())
    .then((data) => {
        books = data;
        loadCarousel();
        startAutoRotation();
    })
    .catch((error) => {
        console.error('Error fetching JSON:', error);
    });

// Load the carousel with visible cards
function loadCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';

    for (let i = 0; i < visibleCards; i++) {
        const bookIndex = (currentIndex + i) % books.length;
        const book = books[bookIndex];

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="photos/${book.photo}" alt="${book.title}">
            <h2>${book.title}</h2>
            <p>${book.description}</p>
        `;

        carousel.appendChild(card);
    }
}

// Move carousel on arrow click
document.getElementById('left-arrow').addEventListener('click', () => {
    moveCarousel(-1);
});

document.getElementById('right-arrow').addEventListener('click', () => {
    moveCarousel(1);
});

// Function to move the carousel
function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + books.length) % books.length;
    loadCarousel();
    resetAutoRotation();
}

// Start automatic carousel rotation
function startAutoRotation() {
    autoRotationTimer = setInterval(() => {
        moveCarousel(1);
    }, 10000);
}

// Reset auto-rotation timer
function resetAutoRotation() {
    clearInterval(autoRotationTimer);
    startAutoRotation();
}

// Add swipe gesture support
let touchStartX = 0;
let touchEndX = 0;

document.getElementById('carousel-wrapper').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.getElementById('carousel-wrapper').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
});

function handleSwipeGesture() {
    if (touchEndX < touchStartX - 50) {
        moveCarousel(1);
    } else if (touchEndX > touchStartX + 50) {
        moveCarousel(-1);
    }
}
