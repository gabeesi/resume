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

// Close
function closeViewer() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
