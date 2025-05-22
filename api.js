const form = document.querySelector(".mood-form");
const suggestion = document.querySelector(".suggestion");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());
  console.log(data);

  let mood = data.mood;
  let input = data.userText;

  if (mood === "happy") {
    suggestion.textContent = "Yay! Keep shining! 😊";
    // something for the image
    //user response
  }
}
