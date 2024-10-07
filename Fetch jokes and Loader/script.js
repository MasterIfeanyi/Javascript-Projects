const jokeElement = document.getElementById("joke");

const fetchBtn = document.getElementById("fetch-joke");

const loadingScreen = document.querySelector(".loading-screen");

const progressBarOuter = document.querySelector(".progress-bar-outer");

const progressBarInner = document.querySelector(".progress-bar-inner");

// progressBarOuter.classList.add("progress-bar-outer");

// progressBarOuter.innerHTML = progressBarInner;

// progressBarInner.className = "progress-bar-inner";




let isLoading;



const fetchReq = async () => {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", { // make API call to the website
            headers: {
                "Accept": "application/json"
            }
        });


        if(!response.ok) throw new Error("Failed to fetch Joke"); // throw error when things go wrong

        const data = await response.json(); // convert fetch reponse to json

        jokeElement.textContent = data.joke; // put joke in the HTML element to display

        isLoading = false;

        loadingScreen.style.display = "none";
 

    } catch (error) {

        console.error("Error fetching joke: ", error) 

        jokeElement.textContent = "An error occured while fetching the joke"

    }
}


const getJoke = async () => {
    
    isLoading = true;

    progressBarInner.style.width = `${0}%`;

    let width = 0;

    const interValId = setInterval(() => {

        width += 30;

        progressBarInner.style.width = `${width}%`;

        if(!isLoading) {
            clearInterval(interValId); 
            // loadingScreen.style.display = "none"
        }

    }, 1000);


    await new Promise(resolve => setTimeout(resolve, 2000));

    isLoading ? loadingScreen.style.display = "flex" : null;

    setTimeout(fetchReq, 2000)
}



fetchBtn.addEventListener("click", getJoke) 