document.getElementById("lightButton").addEventListener("click", function() {
    const cigarette = document.getElementById("cigarette");
    const burningTip = document.getElementById("burningTip");
    const smoke = document.getElementById("smoke");

    burningTip.style.display = "block"; // Show burning tip
    smoke.style.opacity = 1; // Start smoke

    // Simulate the cigarette burning down
    let width = 300;
    const burnInterval = setInterval(function() {
        width -= 2;
        cigarette.style.width = width + "px";
        if (width <= 100) {
            clearInterval(burnInterval); // Stop burning when cigarette is almost done
            smoke.style.opacity = 0; // Stop smoke
        }
    }, 100); // Adjust speed of burning
});
