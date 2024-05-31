let button = document.querySelector("button");
let txt = document.querySelector("h3");
button.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 16777215);
  let hex = "#" + random.toString(16);
  document.body.style.backgroundColor = hex;
  txt.innerText = hex;
});
