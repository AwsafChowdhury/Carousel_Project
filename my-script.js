// Carousel Data
let books = [];

// Fetch the book data
fetch('book-description.json')
    .then(response => response.json())
    .then(data => {
        books = data;
        loadCarousel();
    });

// Variables for carousel logic
let currentIndex = 0;
const visibleCards = 3; // Number of visible cards at a time

// Load the carousel with cards
function loadCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';

    books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="photos/${book.photo}" alt="${book.title}">
            <h2>${book.title}</h2>
            <p>${book.description}</p>
        `;

        carousel.appendChild(card);
    });

    updateCarousel();
}

// Update the carousel view
function updateCarousel() {
    const carousel = document.getElementById('carousel');
    const cardWidth = 320; // Card width including margin (adjust as needed)

    // Calculate transform offset
    const offset = -(currentIndex * cardWidth);
    carousel.style.transform = `translateX(${offset}px)`;
}

// Add event listeners for navigation
document.getElementById('left-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + books.length) % books.length;
    updateCarousel();
});

document.getElementById('right-arrow').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % books.length;
    updateCarousel();
});
