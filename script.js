let burnInterval; // Global variable to hold the interval
let width = 300;  // Start width for the cigarette

// Function to start smoking
function startSmoking() {
    const cigarette = document.getElementById("cigarette");
    const burningTip = document.getElementById("burningTip");
    const smoke = document.getElementById("smoke");

    if (burnInterval) {
        clearInterval(burnInterval); // Clear any existing interval
    }

    burningTip.style.display = "block"; // Show burning tip
    smoke.style.opacity = 1; // Start smoke

    burnInterval = setInterval(function() {
        width -= 2;
        cigarette.style.width = width + "px";
        if (width <= 100) {
            clearInterval(burnInterval); // Stop burning when cigarette is almost done
            smoke.style.opacity = 0; // Stop smoke
        }
    }, 100); // Adjust speed of burning
}

// Function to stop smoking
function stopSmoking() {
    if (burnInterval) {
        clearInterval(burnInterval); // Stop the burning process
    }
    document.getElementById("smoke").style.opacity = 0; // Hide smoke
}

// Attach event listeners to the buttons
document.getElementById("lightButton").addEventListener("click", startSmoking);
document.getElementById("stopButton").addEventListener("click", stopSmoking);
