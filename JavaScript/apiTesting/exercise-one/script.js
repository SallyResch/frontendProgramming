const button = document.getElementById("fetchButton");
const dogContainer = document.getElementById("dogContainer");
const URL = "https://dog.ceo/api/breeds/image/random";

const fetchDog = async () => {
    try {
        dogContainer.innerHTML = "";
        const response = await fetch(URL)

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const dogPicture = document.createElement("img");
        dogPicture.setAttribute("src", data.message);
        dogPicture.setAttribute("width", 200);
        dogContainer.appendChild(dogPicture);
        console.log(data.message);

    } catch (error) {
        dogContainer.innerText = error
    }
};
button.addEventListener("click", fetchDog);