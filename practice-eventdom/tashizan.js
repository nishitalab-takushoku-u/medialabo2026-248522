function keisan() {
  let left = Number(document.querySelector("#left").value);
  let right = Number(document.querySelector("#right").value);

  let answer = left + right;

  document.querySelector("#answer").textContent = answer;
}

let b = document.querySelector("#calc");
b.addEventListener("click", keisan);