// Array of all images dynamically
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
        imgElement.classList.add('gallery-image'); // Add class for styling
        imgElement.onclick = function() { openModal(image); }; // Open modal on click
        galleryContainer.appendChild(imgElement);
    });

    updateSliderPosition();
}



// Function to update the slider position
function updateSliderPosition() {
    const galleryContainer = document.getElementById("gallery-images");
    const imageWidth = 270; // The width of the images
    const margin = 20; // The margin between images (10px each side)
    const totalWidth = imageWidth + margin * 2; // Total width of an image with margin
    const offset = -startIndex * totalWidth; // Adjusted offset

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

// Function to open the modal and display the selected image
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSrc;
    modal.style.display = "block"; // Show modal

    // Set the current index to the clicked image's index
    const currentIndex = images.indexOf(imageSrc);
    modal.dataset.currentIndex = currentIndex;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide modal
}

// Function to show the next image in the modal
function nextImage() {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    let currentIndex = parseInt(modal.dataset.currentIndex);

    if (currentIndex + 1 < images.length) {
        currentIndex++;
        modalImage.src = images[currentIndex];
        modal.dataset.currentIndex = currentIndex; // Update current index
    }
}

// Function to show the previous image in the modal
function prevImage() {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    let currentIndex = parseInt(modal.dataset.currentIndex);

    if (currentIndex - 1 >= 0) {
        currentIndex--;
        modalImage.src = images[currentIndex];
        modal.dataset.currentIndex = currentIndex; // Update current index
    }
}


// Initial rendering of visible images
renderVisibleImages();
