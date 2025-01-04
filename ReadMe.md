# Carousel Design

## Project Overview

This project implements a responsive, rotating carousel component that displays a series of cards. Each card includes an image, a title, and a content section with descriptive text. The carousel is dynamic, allowing for the display of `n` cards, while only `x` cards are visible on the screen at any given time.

## Files Included

- **index.html**: Contains the main structure of the carousel, including the HTML layout, carousel wrapper, and navigation arrows.
- **style.css**: Manages the visual aspects of the carousel, including styles for the body, header, carousel wrapper, card design, and responsiveness to various screen sizes.
- **script.js**: Handles the carousel's functionality, fetching book data, loading the carousel, managing user interactions, and implementing features such as auto-rotation and swipe gestures.

- **book-description.json**: Contains the data for the books displayed in the carousel, including their titles, descriptions, and image paths.
- **photos folder**: Contains the images of the books with consistent naming book1.jpg,book2.jpg,etc


## Configuring n and x

In this carousel design:

- **n** refers to the total number of books available in the carousel. This is defined by the entries in the `book-description.json` file. Each book entry should follow this format:

  ```json
  {
      "title": "Book Title",
      "description": "A brief description of the book.",
      "photo": "image.jpg"
  }

Adding as many book entries as needed in the JSON file will allow the carousel to automatically adjust to display them.

x refers to the number of books displayed at one time in the carousel. This can be configured directly in the script.js file by changing the value of the visibleCards constant:
   code snippet: const visibleCards = 3; // Change this value to configure how many cards are visible at a time
Modifying this value controls how many cards are seen in the carousel. For example, setting visibleCards = 2 would display two cards at a time, while setting it to 4 would show four cards.


## Additional Features Implemented
-Smooth Animation: The carousel transitions between cards smoothly using CSS transitions defined in style.css. This ensures a pleasant user experience when navigating through the cards.

-Auto-Rotation: The carousel automatically rotates to the next set of cards every 10 seconds, which can be adjusted in the startAutoRotation function in script.js:
    code snippet:autoRotationTimer = setInterval(() => {
                    moveCarousel(1);
                }, 10000); // Change this value to adjust the rotation interval


-Swipe Gesture Support: The carousel supports touch gestures, allowing users to swipe left or right on mobile devices to navigate through the cards. This feature is implemented in script.js:
    code snippet:document.getElementById('carousel-wrapper').addEventListener('touchstart', (e) => {
                    touchStartX = e.changedTouches[0].screenX;
                });

                document.getElementById('carousel-wrapper').addEventListener('touchend', (e) => {
                    touchEndX = e.changedTouches[0].screenX;
                    handleSwipeGesture();
                });


-Hover Effects: When the user hovers over a book card, the description expands to provide more details, making the carousel more interactive. This effect is managed in the CSS:
    code snippet:.card:hover p {
                    display: block; /* Show the full description on hover */
                    height: auto; /* Allow the description to expand */
                }
