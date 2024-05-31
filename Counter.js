let start = document.querySelector("button");
let txt = document.querySelector("h2");
let flag = 0;
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let Reset = document.querySelector(".reset");
let arra = [{ start, increase, decrease, Reset }];

txt.style.color = "gray";
start.addEventListener("click", () => {
  flag = 0;
  txt.style.color = "black";
  txt.innerText = flag;
});
increase.addEventListener("click", () => {
  flag++;
  console.log(flag);
  if (0 < flag) {
    txt.style.color = "green";
    txt.innerText = flag;
  } else if (0 === flag) {
    txt.style.color = "black";
    txt.innerText = flag;
  } else {
    txt.style.color = "red";
    txt.innerText = flag;
  }
});
decrease.addEventListener("click", () => {
  flag--;
  console.log(flag);
  if (0 > flag) {
    txt.style.color = "red";
    txt.innerText = flag;
  } else if (0 === flag) {
    txt.style.color = "black";
    txt.innerText = flag;
  } else {
    txt.style.color = "green";
    txt.innerText = flag;
  }
});
