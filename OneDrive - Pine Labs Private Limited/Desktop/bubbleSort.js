async function startBubbleSort() {
    const arrayBars = document.querySelectorAll('.array-bar');
    const len = arrayBars.length;

    // Increase animation speed by reducing the delay
    const animationSpeed = 100; // milliseconds

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            // Highlight the bars being compared
            arrayBars[j].style.backgroundColor = '#FF4500';
            arrayBars[j + 1].style.backgroundColor = '#FF4500';

            // Pause for visualization
            await new Promise(resolve => setTimeout(resolve, animationSpeed));

            const height1 = parseInt(arrayBars[j].style.height);
            const height2 = parseInt(arrayBars[j + 1].style.height);

            // Swap the bars if necessary
            if (height1 > height2) {
                arrayBars[j].style.height = `${height2}px`;
                arrayBars[j + 1].style.height = `${height1}px`;
            }

            // Remove the highlight
            arrayBars[j].style.backgroundColor = '#007bff';
            arrayBars[j + 1].style.backgroundColor = '#007bff';
        }
    }

    // Highlight the final sorted array
    for (let i = 0; i < len; i++) {
        arrayBars[i].style.backgroundColor = '#32CD32';
    }
}
