let dialogue = document.getElementById("words");
let index = 0;


function typeText(text) {
  let i = 0;
  dialogue.textContent = "";

  let interval = setInterval(() => {
    dialogue.textContent += text[i];
    i++;

    if (i >= text.length) {
      clearInterval(interval);
    }
  }, 40);
}

typeText(phrases[index]);

document.onkeydown = function(event) {
  if (event.code === "Space") {
    index++;
    if (index < phrases.length) {
      typeText(phrases[index]);
    } else {
      index = 0;
      typeText(phrases[index]);
    }
  }
};
