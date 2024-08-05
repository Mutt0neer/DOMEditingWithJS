const para = document.createElement("p");
para.textContent="Hey I'm Red!";

const header = document.createElement("h3");
header.textContent="I'm a blue h3!";
const div = document.createElement("div");
div.style.border = "thick solid black";
div.style.backgroundColor = "pink";
const header1 = document.createElement("h1");
div.appendChild(header1);
header1.textContent= "I'm in a div";
const divp = document.createElement("p");
div.appendChild(divp);
divp.textContent= "ME TOO!";
console.log("working?")
