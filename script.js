// Function to calculate pet care cost based on selected pet type and age
function calculateCost() {
    const petType = document.getElementById('pet-type').value;
    const petAge = document.getElementById('pet-age').value;
    let cost = 0;

    if (petType === 'cat') {
        if (petAge === 'puppy') {
            cost = 100; // Example cost for kittens
        } else if (petAge === 'adult') {
            cost = 75; // Example cost for adult cats
        } else if (petAge === 'senior') {
            cost = 50; // Example cost for senior cats
        }
    } else if (petType === 'dog') {
        if (petAge === 'puppy') {
            cost = 150; // Example cost for puppies
        } else if (petAge === 'adult') {
            cost = 100; // Example cost for adult dogs
        } else if (petAge === 'senior') {
            cost = 80; // Example cost for senior dogs
        }
    } else if (petType === 'rabbit') {
        if (petAge === 'puppy') {
            cost = 50; // Example cost for baby rabbits
        } else if (petAge === 'adult') {
            cost = 40; // Example cost for adult rabbits
        } else if (petAge === 'senior') {
            cost = 30; // Example cost for senior rabbits
        }
    }

    // Display the result of the cost calculation
    document.getElementById('result').innerText = `Estimated Care Cost: $${cost}`;
}

// Contact Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from refreshing the page
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.\nWe will get back to you at ${email}.`);
        document.getElementById('contact-form').reset(); // Reset form after submission
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

// Animation Handling for the Hero Section (if you have animations on the homepage)
const heroSection = document.querySelector('.hero');
if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            heroSection.classList.add('animate');
        } else {
            heroSection.classList.remove('animate');
        }
    });
}

// Image Slider for Pets (if you want an image carousel on the homepage or other pages)
let currentIndex = 0;
const images = [
    'https://images.unsplash.com/photo-1592194996308-7b43878e84a6', // Persian Cat
    'https://images.unsplash.com/photo-1606787613319-e0e6d7389c61',
    'https://images.unsplash.com/photo-1588776815050-37c2a056ca80', // Rabbit
];

// Function to change the image in a slider
function changeImage() {
    const imageElement = document.querySelector('.hero img');
    imageElement.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

// Change image every 5 seconds (you can adjust the time)
setInterval(changeImage, 5000);