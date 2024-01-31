console.log("Cats, cats, cats...");
// Using: https://catfact.ninja/

const out = document.querySelector("p#fact");

async function getData() {
    try {
        const api = "https://catfact.ninja/fact";
        const response = await fetch(api);
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const obj = await response.json();
        console.log(obj);
        out.innerHTML = obj.fact;
    } catch (error) {
        console.error(error.message); 
    }
}

getData();