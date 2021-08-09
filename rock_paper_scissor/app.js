let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getCompChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWorld(letter) {
  if (letter === "r") return "Rock👊";
  if (letter === "p") return "Paper🧾";
  if (letter === "s") return "Scissor✂";
}

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "user".fontsize(3).sup();
  const smallcompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWorld(userChoice)}${smallUserWord} beats ${convertToWorld(compChoice)}${smallcompWord}. You win!🔥`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, compChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "user".fontsize(3).sup();
  const smallcompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWorld(userChoice)}${smallUserWord} loses to ${convertToWorld(compChoice)}${smallcompWord}. You Lost!😐`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, compChoice) {
  const smallUserWord = "user".fontsize(3).sup();
  const smallcompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWorld(userChoice)}${smallUserWord} equals ${convertToWorld(compChoice)}${smallcompWord}. Its a Draw `;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}


function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissor_div.addEventListener('click', () => game("s"));
}

main();
