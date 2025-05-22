const form = document.querySelector(".mood-form");
const suggestion = document.querySelector(".suggestion");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());
}

let happy = document.querySelector("#happy");
let sad = document.querySelector("#sad");
let calm = document.querySelector("#calm");
