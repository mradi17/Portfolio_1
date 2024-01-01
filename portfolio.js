function scrollToExperience() {
    // Get the position of the target element
    var targetElement = document.getElementById('experience');
    var targetPosition = targetElement.offsetTop;

    // Scroll to the target position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}