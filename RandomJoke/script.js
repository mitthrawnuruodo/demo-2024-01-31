console.log("The call me the Joker...");
// Using: https://github.com/15Dkatz/official_joke_api

const out = document.querySelector("div#joke");
const btn = document.querySelector("button#newJoke");

function listJoke(jokeObj) {
    console.log(jokeObj);
    let joke = `
      <p>${jokeObj.setup}</p>
      <p>${jokeObj.punchline}</p>
    `;
    out.innerHTML = joke;
}

async function getData() {
    try {
      const api = "https://official-joke-api.appspot.com/jokes/random";
      const response = await fetch(api);
      if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
      const obj = await response.json();
      console.log(obj);
      listJoke(obj);
    } catch (error) {
      console.error(error.message); 
    }
}

window.addEventListener('load', getData);
btn.addEventListener('click', getData);