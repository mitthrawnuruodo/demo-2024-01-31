console.log("Here, doggy...");
// Using: https://dog.ceo/dog-api/

const out = document.querySelector("div#container");
const btn = document.querySelector("button#newDog");

const postImage = (imgUrl) => out.innerHTML = `<img src="${imgUrl}" alt="Random dog">`;

const getImage = () => {
    const api = "https://dog.ceo/api/breeds/image/random"; 
    fetch(api)
        .then ((response) => {
            if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
            return response.json();
        })
        .then (obj => {
            console.log(obj);
            postImage(obj.message);
        })
        .catch (error => console.error(error.message))
}

getImage();
//setInterval(getImage, 3000);
btn.addEventListener('click', getImage);
