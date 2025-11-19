function calcularQuiz() {
  let score = 0;
  let resultadoHTML = "<h3 class='mb-3'>Resultado:</h3>";

  const p1 = document.querySelector("input[name='p1']:checked");
  if (p1 && p1.value === "c") score++;

  const p2 = Array.from(
    document.querySelectorAll("input[name='p2']:checked")
  ).map((e) => e.value);

  const corretasP2 = ["saibro", "grama", "quadra_dura"];
  if (
    p2.length === corretasP2.length &&
    p2.every((v) => corretasP2.includes(v))
  ) {
    score++;
  }

  const p3 = document
    .querySelector("input[name='p3']")
    .value.trim()
    .toLowerCase();
  if (p3 === "0-0" || p3 === "zero a zero" || p3 === "love-love") {
    score++;
  }

  const p4 = document.querySelector("input[name='p4']:checked");
  if (p4 && p4.value === "4") score++;

  const p5 = document.querySelector("input[name='p5']:checked");
  if (p5 && p5.value === "slice") score++;

  const p6 = document.querySelector("input[name='p6']:checked");
  if (p6 && p6.value === "nadal") score++;

  const p7 = document.querySelector("input[name='p7']:checked");
  if (p7 && p7.value === "a") score++;

  const p8 = document.querySelector("input[name='p8']:checked");
  if (p8 && p8.value === "5") score++;

  const p9 = Array.from(
    document.querySelectorAll("input[name='p9']:checked")
  ).map((e) => e.value);

  const corretasP9 = ["raquete", "bola"];
  if (
    p9.length === corretasP9.length &&
    p9.every((v) => corretasP9.includes(v))
  ) {
    score++;
  }

  const p10 = document.querySelector("input[name='p10']:checked");
  if (p10 && p10.value === "3") score++;

  let extraMsg = "";

  if (score === 10)
    extraMsg = "🎾 Incrível! Você domina, é quase profissional!";
  else if (score >= 7) extraMsg = "👏 Muito bom! Você sabe bastante.";
  else if (score >= 4) extraMsg = "🙂 Tá indo bem, continue estudando!";
  else extraMsg = "🏸 Bora treinar mais!";

  resultadoHTML += `
        <p class="fs-4">Você acertou <strong>${score}</strong> de 10 questões.</p>
        <p class="fs-5">${extraMsg}</p>
    `;

  document.getElementById("resultado").innerHTML = resultadoHTML;
}
