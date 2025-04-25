// levels images stocked in arrays
const levels = [
    {
      images: ["images/level_1/yellow1.jpg", "images/level_1/yellow2.jpg", "images/level_1/yellow3.jpg", "images/level_1/yellow4.jpg"],
      answer: "yellow"
    },
    {
      images: ["images/level_2/vacation.jpeg", "images/level_2/vacation2.jpeg", "images/level_2/vacation3.jpeg", "images/level_2/vacation4.jpeg"],
      answer: "vacation"
    },
    {
      images: ["images/level_3/travel.jpeg", "images/level_3/travel2.jpg", "images/level_3/travel3.jpg", "images/level_3/travel4.jpg"],
      answer: "travel"
    },
    {
      images: ["images/level_4/mouse.jpg", "images/level_4/mouse2.jpg", "images/level_4/mouse3.jpg", "images/level_4/mouse4.png"],
      answer: "mouse"
    },
    {
      images: ["images/level_5/game.png", "images/level_5/game2.jpg", "images/level_5/game3.jpg", "images/level_5/game4.webp"],
      answer: "game"
    }
  ];
  
  let isChallengeMode =false;
  let currentLevel = 0;
  let score = 0;
  let yourLevel = 1;
  const scoreDisplay = document.getElementById("score");
  const yourLevelDisplay = document.getElementById("yourLevel");
  const inputField = document.getElementById("answer");
  const feedback = document.getElementById("feedback");
  const lettersContainer = document.getElementById("letters-container");
  
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  function generateLetters(answer, level) {
    let letters = answer.toUpperCase().split(""); //convert the answer to uppercase and then splits it to an array of separate letters
  
    // add random letters to make it hard (2 letters if you're in level 2 or under --> level * 2 if you're level 3 or above)
    const extraCount = level < 2 ? 2 : level * 2;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    for (let i = 0; i < extraCount; i++) {
      letters.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
    }
  
    return shuffle(letters);
  }

  // timer 
  let timerInterval;
  let timeLeft = 30;
  const timerDisplay = document.getElementById("timer");

  function startTimer(){
    if (!isChallengeMode){
      timerDisplay.textContent = "";
      timerDisplay.style.border = "none";
      return
    }

      clearInterval(timerInterval);
      timeLeft = 30;
      timerDisplay.textContent = `Remaining time : ${timeLeft}s`;
  
      timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Remaining time : ${timeLeft}s`;
  
        if (timeLeft < 10){
          timerDisplay.style.color = "red";
        } else {
          timerDisplay.style.color = "black";
        }
  
        if (timeLeft <= 0){
          clearInterval(timerInterval);
          feedback.textContent = "Time is left...";
          document.getElementById("check").disabled = "true";
          document.querySelectorAll(".letter-btn").forEach(btn => btn.disabled = true);
        }
      }, 1000);
    }

  //loanding levels

  function loadLevel() {
    const level = levels[currentLevel];
    const imgs = document.querySelectorAll(".img");
  
    imgs.forEach((img, i) => {
      img.src = level.images[i];
    });
  
    inputField.value = "";
    feedback.textContent = "";
    lettersContainer.innerHTML = "";
  
    const letters = generateLetters(level.answer, currentLevel);
    letters.forEach(letter => {
      const btn = document.createElement("button");
      btn.textContent = letter;
      btn.classList.add("letter-btn");
      btn.addEventListener("click", () => {
        inputField.value += letter;
        btn.disabled = true; // to make sure the user won't click it twice
        btn.style.color = "red";
      });
      lettersContainer.appendChild(btn);
    });

    if (currentLevel < 11){
      startTimer();
    } else {
      timerDisplay.textContent = "";
      clearInterval(timerInterval);
    }
  }
  
// answer check

  document.getElementById("check").addEventListener("click", () => {
    const userAnswer = inputField.value.trim().toLowerCase();
    const correctAnswer = levels[currentLevel].answer.toLowerCase();
  
    if (userAnswer === correctAnswer) {
      feedback.textContent = "Congratulations !!!";
      currentLevel++;
      score++;
      yourLevel++;
      scoreDisplay.textContent = `Score: ${score*10}%`;
      yourLevelDisplay.textContent = `Level: ${yourLevel}`;
      if (currentLevel < levels.length) {
        setTimeout(loadLevel, 1500);
      } else {
        feedback.textContent = "You're a genius ! See you in the next session...";
        clearInterval(timerInterval);
      }
    } else {
      feedback.textContent = "Degdeg a degdagiii ! makan makan ziiigh !";
    }
  });
  
  document.getElementById("reset").addEventListener("click", () => {
    inputField.value = "";
    document.querySelectorAll(".letter-btn").forEach(btn => {
      btn.disabled = false;
      btn.style.color = "#56615a"; 
    });
  });
  
  // launch the game
  document.getElementById("start-game-relax").addEventListener("click", () => {
    isChallengeMode = false;
    startGame();
  });

  document.getElementById("start-game-challenge").addEventListener("click", () => {
    isChallengeMode = true;
    startGame();
  });
  function startGame(){
    document.getElementById("start-screen-btn").style.display = "none";
    document.getElementById("game-wrapper").style.display = "block";
    loadLevel();
    document.getElementById("quit-btn").style.display = "inline-block"
  }

