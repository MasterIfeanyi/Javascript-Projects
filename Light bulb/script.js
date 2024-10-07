const bulb = document.getElementById("bulb");

const toggleButton = document.getElementById("toggleBtn");

let isBulbOn = false;

toggleButton.addEventListener("click", () => {
    if(isBulbOn) {

        bulb.src = "bulb-off.png";

        toggleButton.textContent = "Turn on";
    } else {
        bulb.src = "bulb-on.png";

        toggleButton.textContent = "Turn Off";

    }

    isBulbOn = !isBulbOn;

})