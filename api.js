let form = document.querySelector(".mood-form");
let output = document.querySelector(".suggestion");

// This is for the emoji images
let imgAlt = "";
let imgSrc = "";

// this is for the output message
let message = document.createElement("h2");
message.textcontent = output;

// This is for the emoji images
let img = document.createElement("img");
img.alt = imgAlt;
img.src = imgSrc;

// this is to show the user's input
let paragraph = document.createElement("p");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());
  console.log(data);

  let mood = data.mood;
  let input = data.userText;

  if (mood === "happy") {
    message.textContent = "Yay! Keep shining! 😊";
    paragraph.textContent = `You Said: ${input}`;
    imgAlt = "happy face";
    imgSrc = "images/happy.png";
  } else if (mood === "sad") {
    message.textContent = "It's okay to feel sad. Sending hugs 💙";
    paragraph.textContent = `You Said: ${input}`;
    imgAlt = "sad face";
    imgSrc = "images/sad.png";
  } else if (mood === "calm") {
    message.textContent = "Wow keep it up! Emotional balance is everything ☺️";
    paragraph.textContent = `You Said: ${input}`;
    imgAlt = "calm face";
    imgSrc = "images/calm.png";
  } else {
    message.textContent = "It's ok sometimes I don't feel anything either.💪🏽";
  }

  output.appendChild(message);
  output.appendChild(paragraph);
  output.appendChild(img);
}
