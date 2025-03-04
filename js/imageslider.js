// Array of all images
const images = [
    'images/Gallery/slider01.jpg',
    'images/Gallery/slider02.jpg',
    'images/Gallery/slider03.jpg',
    'images/Gallery/slider04.jpg',
    'images/Gallery/slider05.jpg',
    'images/Gallery/slider06.jpg',
    'images/Gallery/slider07.jpg',
    'images/Gallery/slider08.jpg',
    'images/Gallery/slider09.jpg',
    'images/Gallery/slider10.jpg',
    'images/Gallery/slider11.jpg',
    'images/Gallery/slider12.jpg',
    'images/Gallery/slider13.jpg',
    'images/Gallery/slider14.jpg',
    'images/Gallery/slider15.jpg',
    'images/Gallery/slider16.jpg',
    'images/Gallery/slider17.jpg',
    'images/Gallery/slider18.jpg',
    'images/Gallery/slider19.jpg',
    'images/Gallery/slider20.jpg'
];

// Start index of the visible images
let startIndex = 0;

// Number of images visible at once
const imagesPerPage = 5;

// Function to render visible images
function renderVisibleImages() {
    const galleryContainer = document.getElementById("gallery-images");
    galleryContainer.innerHTML = ''; // Clear the container

    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = "Gallery Image";
        galleryContainer.appendChild(imgElement);
    });

    updateSliderPosition();
}

// Function to update the slider position
function updateSliderPosition() {
    const galleryContainer = document.getElementById("gallery-images");
    const offset = -startIndex * 220; // Image width (200px) + margin (10px * 2)
    galleryContainer.style.transform = `translateX(${offset}px)`;
}

// Show the previous set of images
function prevSlide() {
    if (startIndex > 0) {
        startIndex--;
        updateSliderPosition();
    }
}

// Show the next set of images
function nextSlide() {
    if (startIndex + imagesPerPage < images.length) {
        startIndex++;
        updateSliderPosition();
    }
}

// Initial rendering of visible images
renderVisibleImages();
