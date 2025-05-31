let dialogue = document.getElementById("words");
let index = 0;

dialogue.textContent = phrases[index];

document.onkeydown = function(event) {
  if (event.code === "Space") {
    index++;
    if (index < phrases.length) {
      dialogue.textContent = phrases[index];
    } else {
      index = 0;
      dialogue.textContent = phrases[index];
    }
   }
};
