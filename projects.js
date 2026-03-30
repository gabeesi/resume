function openProject(project) {
  const viewer = document.getElementById("project-viewer");
  const modal = document.getElementById("modal");

  modal.style.display = "flex";

  // BMI
  if (project === "bmi") {
    viewer.innerHTML = `
      <button class="btn" onclick="closeViewer()">✕</button>
      <h3>BMI Calculator</h3>
      <input type="number" id="weight" placeholder="Weight (kg)">
      <input type="number" id="height" placeholder="Height (m)">
      <button class="btn" onclick="calcBMI()">Calculate</button>
      <p id="result"></p>
    `;

  // Counter
  } else if (project === "counter") {
    count = 0;
    viewer.innerHTML = `
      <button class="btn" onclick="closeViewer()">✕</button>
      <h3>Counter App</h3>
      <p id="count">0</p>
      <button class="btn" onclick="changeCount(-1)">-</button>
      <button class="btn" onclick="changeCount(1)">+</button>
    `;

  // Characters
  } else if (project === "characters") {
    viewer.innerHTML = `
      <button class="btn" onclick="closeViewer()">✕</button>
      <h3>Character Counter</h3>
      <input type="text" id="textInput" placeholder="Type something...">
      <button class="btn" onclick="countCharacters()">Count</button>
      <p id="char-result"></p>
    `;
  }
  // CALCULADORA BÁSICA
    else if (project === "calculator") {
  viewer.innerHTML = `
     <button class="btn" onclick="closeViewer()">✕</button>
     <h3>Basic Calculator</h3>
     <input type="number" id="num1" placeholder="First number">
     <input type="number" id="num2" placeholder="Second number">
     <button class="btn" onclick="calcBasic()">Calculate</button>
     <p id="calc-result"></p>
  `;
}

// TRIÂNGULO
else if (project === "triangle") {
  viewer.innerHTML = `
    <button class="btn" onclick="closeViewer()">✕</button>
    <h3>Triangle Calculator</h3>
    <input type="number" id="ladoA" placeholder="Side A">
    <input type="number" id="ladoB" placeholder="Side B">
    <input type="number" id="ladoC" placeholder="Side C">
    <button class="btn" onclick="calcTriangle()">Calculate</button>
    <p id="triangle-result"></p>
  `;
}

// DESCONTO
else if (project === "discount") {
  viewer.innerHTML = `
    <button class="btn" onclick="closeViewer()">✕</button>
    <h3>Discount Calculator</h3>
    <input type="number" id="valor" placeholder="Purchase value">
    <input type="number" id="desconto" placeholder="Discount (%)">
    <button class="btn" onclick="calcDiscount()">Calculate</button>
    <p id="discount-result"></p>
  `;
}

//TABUADA
else if (project === "tab") {
  viewer.innerHTML = `
    <button class="btn" onclick="closeViewer()">✕</button>
    <h3>Multiplication Table</h3>
    <input type="number" id="n1" placeholder="Enter a number">
    <button class="btn" onclick="calcTab()">Calculate</button>
    <p id="tab-result"></p>
  `;
}

//NÚMERO ALEATÓRIO
else if (project === "random") {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;

  viewer.innerHTML = `
    <button class="btn" onclick="closeViewer()">✕</button>
    <h3>Guess the Number</h3>

    <input type="number" id="guess" placeholder="Enter a number (1–100)">
    <button class="btn" onclick="calcRandom()">Guess</button>

    <p id="random-result"></p>
  `;
}

//ADICIONAR FILMES
else if (project === "movie"){
    viewer.innerHTML = `
    <button class="btn" onclick="closeViewer()">✕</button>
    <h3>Favorite Movies</h3>
    <input type="text" id="movieInput" placeholder="Enter movie name" onkeypress="if(event.key==='Enter') addMovie()">
    <button class="btn" onclick="addMovie()">Add</button>
    <ul id="movieList"></ul>
  `;
}

//TO-DO LIST
else if (project === "todo") {
  viewer.innerHTML = `
    <button class="btn" onclick="closeViewer()">✕</button>
    <h3>To-Do List</h3>

    <input type="text" id="taskInput" placeholder="New task" onkeypress="if(event.key==='Enter') addTask()">
    <button class="btn" onclick="addTask()">Add</button>

    <ul id="taskList"></ul>
  `;

  loadTasks();
}

//POMODORO
else if (project === "pomodoro") {
  time = 1500;
  viewer.innerHTML = `
    <button class="btn" onclick="closeViewer()">✕</button>
    <h3>Pomodoro Timer</h3>

    <p id="timer">25:00</p>

      <button class="btn" onclick="startPomodoro()">Start</button>
      <button class="btn" onclick="pausePomodoro()">Pause</button>
      <button class="btn" onclick="resetPomodoro()">Reset</button>
  `;
}

//QUIZ
else if (project === "quiz") {
  viewer.innerHTML = `
    <button class="btn" onclick="closeViewer()">✕</button>
    <h3>Quiz</h3>

      <p id="progress"></p>
      <p id="question"></p>
    <div id="answers"></div>
      <p id="feedback"></p>
      <p id="score"></p>
  `;

  startQuiz();
}

//PASSWORD GENERATOR
else if (project === "password") {
  viewer.innerHTML = `
    <button class="btn" onclick="closeViewer()">✕</button>
    <h3>Password Generator</h3>

    <input type="number" id="length" placeholder="Length (ex: 8)">
    <div class="options">
      <label><input type="checkbox" id="upper" checked> Uppercase</label>
      <label><input type="checkbox" id="lower" checked> Lowercase</label>
      <label><input type="checkbox" id="numbers" checked> Numbers</label>
      <label><input type="checkbox" id="symbols"> Symbols</label>
    </div>

    <div class="actions">
      <button class="btn" onclick="generatePassword()">Generate</button>
      <button class="btn" onclick="copyPassword()">Copy</button>
    </div>

    <p id="password-result"></p>
  `;
}

//CASH
else if (project === "finance") {
  viewer.innerHTML = `
    <button class="btn" onclick="closeViewer()">✕</button>
    <h3>Finance Tracker</h3>

    <input type="text" id="desc" placeholder="Description">
    <input type="number" id="amount" placeholder="Value (+ income / - expense)">

    <button class="btn" onclick="addTransaction()">Add</button>

    <h4 id="balance">Balance: $0</h4>
    <p id="income">Income: $0</p>
    <p id="expense">Expenses: $0</p>

    <ul id="financeList"></ul>
  `;

  loadTransactions();
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
}
// BMI
function calcBMI() {
  const w = document.getElementById("weight").value;
  const h = document.getElementById("height").value;

  if (w && h) {
    const bmi = (w / (h * h)).toFixed(2);
    document.getElementById("result").innerText = "BMI: " + bmi;
  }
  
}

// Counter
let count = 0;

function changeCount(value) {
  count += value;
  document.getElementById("count").innerText = count;
}

// Characters
function countCharacters() {
  const frase = document.getElementById("textInput").value;

  if (frase) {
    document.getElementById("char-result").innerText =
      "The sentence has " + frase.length + " characters.";
  }
}

// CALCULADORA BÁSICA
function calcBasic() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);

  if (!isNaN(n1) && !isNaN(n2)) {
    document.getElementById("calc-result").innerText =
      `Sum: ${n1 + n2}
      Subtraction: ${n1 - n2}
      Multiplication: ${n1 * n2}
      Division: ${n2 !== 0 ? (n1 / n2).toFixed(2) : "Invalid (division by zero)"}`;
  }
}

// TRIÂNGULO
function calcTriangle() {
  const a = parseFloat(document.getElementById("ladoA").value);
  const b = parseFloat(document.getElementById("ladoB").value);
  const c = parseFloat(document.getElementById("ladoC").value);

  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    const p = a + b + c;
    const sp = p / 2;
    const area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));

    document.getElementById("triangle-result").innerText =
      `Perimeter: ${p}
Area: ${area.toFixed(2)}`;
  }
}

// DESCONTO
function calcDiscount() {
  const valor = parseFloat(document.getElementById("valor").value);
  const desc = parseFloat(document.getElementById("desconto").value);

  if (!isNaN(valor) && !isNaN(desc)) {
    const desconto = (desc / 100) * valor;
    const total = valor - desconto;

    document.getElementById("discount-result").innerText =
      `Original: $${valor}
Discount: $${desconto.toFixed(2)}
Final Price: $${total.toFixed(2)}`;
  }
}

//TABUADA
function calcTab() {
  const numero = document.getElementById("n1").value;
  let texto = "";

  if (numero) {
    for (let i = 1; i <= 10; i++) {
      texto += `${numero} x ${i} = ${numero * i} \n`;
    }

    document.getElementById("tab-result").innerText = texto;
  }
}

//Adivinhação
function calcRandom() {
  const guess = parseInt(document.getElementById("guess").value);
  const result = document.getElementById("random-result");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.innerText = "Enter a valid number between 1 and 100.";
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    result.innerText = `🎉 You got it in ${attempts} attempts!`;
  } else if (attempts >= 3) {
    result.innerText = `❌ Game over! The number was ${randomNumber}`;
  } else if (guess < randomNumber) {
    result.innerText = "Try a higher number.";
  } else {
    result.innerText = "Try a lower number.";
  }
}

//LISTA DE FILMES
function addMovie() {
  const input = document.getElementById("movieInput");
  const list = document.getElementById("movieList");

  const movieName = input.value.trim();

  if (movieName !== "") {
    const li = document.createElement("li");
    // texto do filme
    const span = document.createElement("span");
    span.textContent = movieName;

    // botão remover
    const btn = document.createElement("button");
    btn.innerHTML = "🗑️";
    btn.classList.add("delete-btn");

    btn.onclick = () => li.remove();

    li.appendChild(span);
    li.appendChild(btn);

    list.appendChild(li);

    input.value = "";
  }
}

//TO-DO LIST
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task !== "") {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
  }
}

function loadTasks() {
  const list = document.getElementById("taskList");
  if (!list) return;

  list.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${task}
      <button class="delete-btn" onclick="removeTask(${index})">🗑️</button>
    `;

    list.appendChild(li);
  });
}

function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

//POMODORO
let time = 1500; // 25 minutos
let timerInterval = null;

function updateDisplay() {
  let min = Math.floor(time / 60);
  let sec = time % 60;

  document.getElementById("timer").innerText =
    `${min}:${sec < 10 ? "0" + sec : sec}`;
}

function startPomodoro() {
  if (timerInterval) return; // evita múltiplos timers

  timerInterval = setInterval(() => {
    time--;
    updateDisplay();

    if (time <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("⏰ Time's up!");
    }
  }, 1000);
}

function pausePomodoro() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetPomodoro() {
  clearInterval(timerInterval);
  timerInterval = null;
  time = 1500;
  updateDisplay();
}

//QUIZ
const questions = [
  {
    q: "What does HTML stand for?",
    a: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language"],
    correct: 1
  },
  {
    q: "Which language runs in the browser?",
    a: ["Python", "Java", "JavaScript"],
    correct: 2
  },
  {
    q: "What is CSS used for?",
    a: ["Structure", "Styling", "Database"],
    correct: 1
  },
  {
    q: "Which symbol is used for comments in JS?",
    a: ["//", "<!-- -->", "#"],
    correct: 0
  }
];

let current = 0;
let score = 0;

function startQuiz() {
  current = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = questions[current];

  document.getElementById("progress").innerText =
    `Question ${current + 1} of ${questions.length}`;

  document.getElementById("question").innerText = q.q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  document.getElementById("feedback").innerText = "";

  q.a.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = ans;

    btn.onclick = () => checkAnswer(index, btn);

    answersDiv.appendChild(btn);
  });
}

function checkAnswer(index, btnClicked) {
  const correctIndex = questions[current].correct;
  const buttons = document.querySelectorAll("#answers .btn");

  buttons.forEach((btn, i) => {
    btn.disabled = true;

    if (i === correctIndex) {
      btn.style.background = "green";
    } else {
      btn.style.background = "red";
    }
  });

  if (index === correctIndex) {
    score++;
    document.getElementById("feedback").innerText = "✅ Correct!";
  } else {
    document.getElementById("feedback").innerText = "❌ Wrong!";
  }

  setTimeout(() => {
    current++;

    if (current < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  document.getElementById("question").innerText = "Finished!";
  document.getElementById("answers").innerHTML = "";
  document.getElementById("feedback").innerText = "";

  document.getElementById("score").innerText =
    `Final Score: ${score} / ${questions.length}`;
}

//PASSWORD GENERATOR
function generatePassword() {
  const lengthInput = document.getElementById("length");
  const resultEl = document.getElementById("password-result");

  if (!lengthInput || !resultEl) return;

  const length = parseInt(lengthInput.value) || 8;

  const useUpper = document.getElementById("upper").checked;
  const useLower = document.getElementById("lower").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%&*";

  let chars = "";
  let password = "";

  if (useUpper) chars += upper;
  if (useLower) chars += lower;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;

  if (!length || chars === "") {
    resultEl.innerText = "⚠️ Choose options and length!";
    return;
  }

  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  const strength = checkStrength(password);

  resultEl.innerText = `${password} (${strength})`;
}

function checkStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength <= 2) return "Weak";
  if (strength <= 4) return "Medium";
  return "Strong";
}

function copyPassword() {
  const text = document.getElementById("password-result").innerText;

  if (!text) return;

  const password = text.split(" ")[0];
  navigator.clipboard.writeText(password);

  alert("Copied!");
}

//CASH
function addTransaction() {
  const desc = document.getElementById("desc").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);

  if (desc && !isNaN(amount)) {
    let data = JSON.parse(localStorage.getItem("finance")) || [];

    data.push({ desc, amount });
    localStorage.setItem("finance", JSON.stringify(data));

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";

    loadTransactions();
  }
}
window.generatePassword = generatePassword;
window.copyPassword = copyPassword;

function loadTransactions() {
  const list = document.getElementById("financeList");
  const balanceEl = document.getElementById("balance");
  const incomeEl = document.getElementById("income");
  const expenseEl = document.getElementById("expense");

  if (!list) return;

  list.innerHTML = "";

  let data = JSON.parse(localStorage.getItem("finance")) || [];

  let total = 0;
  let income = 0;
  let expense = 0;

  data.forEach((item, index) => {
    total += item.amount;

    if (item.amount > 0) {
      income += item.amount;
    } else {
      expense += item.amount;
    }

    const li = document.createElement("li");

    li.innerHTML = `
      <span>${item.desc}</span>
      <span style="color:${item.amount >= 0 ? "#4caf50" : "#ff4d4d"}">
        $${item.amount}
      </span>
      <button class="delete-btn" onclick="removeTransaction(${index})">🗑️</button>
    `;

    list.appendChild(li);
  });

  balanceEl.innerText = "Balance: $" + total;
  incomeEl.innerText = "Income: $" + income;
  expenseEl.innerText = "Expenses: $" + Math.abs(expense);
}

function removeTransaction(index) {
  let data = JSON.parse(localStorage.getItem("finance")) || [];
  data.splice(index, 1);
  localStorage.setItem("finance", JSON.stringify(data));
  loadTransactions();
}

// Close
function closeViewer() {
  document.getElementById("modal").style.display = "none";
}


