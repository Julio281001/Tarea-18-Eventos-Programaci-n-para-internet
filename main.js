"use strict";
//------------------------------------

const btnA = document.querySelector("#A");
const btnB = document.querySelector("#B");
const btnC = document.querySelector("#C");

const btns = [btnA, btnB, btnC];

const paciencia = {
  A: 4,
  B: 3,
  C: 2,
};

const contador = {
  A: 0,
  B: 0,
  C: 0,
};

function generateDelay() {
  return Math.floor(Math.random() * 4000) + 1000;
}

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = "gray";
    btn.disabled = true;
    const delay = generateDelay();
    console.log(
      `Boton: ${btn.id}. Delay: ${delay}. Paciencia: ${paciencia[btn.id]}`
    );
    setTimeout(() => {
      if (delay > paciencia[btn.id] * 1000) {
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
      } else {
        contador[btn.id]++;
        btn.disabled = false;
        btn.style.backgroundColor = "cyan";
        btn.innerText =
          btn.innerText.replace(/[0-9]/g, "") + ` ${contador[btn.id]}`;
      }
    }, delay);
  });
});
