function loadingAnimation() {
    let frames = 0;
    const framesArray = ['-', '\\', '|', '/'];

    const animationInterval = setInterval(() => {
        // Clear the previous line
        console.clear();

        // Create the loading animation
        console.log(`Loading ${framesArray[frames]}`);
        frames = (frames + 1) % framesArray.length;
    }, 100);

    // Stop the animation after a specific duration (e.g., 5000ms)
    setTimeout(() => {
        clearInterval(animationInterval);
        console.log("Loading complete!");
    }, 5000);
}

loadingAnimation();
