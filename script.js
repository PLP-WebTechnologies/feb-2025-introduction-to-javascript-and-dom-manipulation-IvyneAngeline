
document.getElementById('changeTextBtn').addEventListener('click', function() {
    const homeSection = document.getElementById('home');
    const newContent = document.createElement('p');
    newContent.textContent = "I'm passionate about creating innovative solutions!";
    homeSection.appendChild(newContent); // Append the new paragraph to the home section
});


document.getElementById('changeTextBtn').addEventListener('click', function() {
    const homeSection = document.getElementById('home');
    homeSection.style.backgroundColor = '#FF6347'; // Change background color to Tomato
});


document.getElementById('addElementBtn').addEventListener('click', function() {
    const newElement = document.createElement('p'); // Create a new paragraph element
    newElement.textContent = 'This is a new element added dynamically!';
    document.body.appendChild(newElement); // Append the new element to the body
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    alert("Thank you for your message! I'll get back to you soon.");
});