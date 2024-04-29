gsap.from(".txt", {
  y: 80,
  duration: 2,
  opacity: -1,
  scrollTrigger: ".txt",
});
let firstindex = 0;

function automaticeslide() {
  setTimeout(automaticeslide, 1000);
  let pics;
  const img = document.querySelectorAll("img");
  for (pics = 0; pics < img.length; pics++) {
    img[pics].style.display = "";
  }
  firstindex++;
  if (firstindex > img.length) {
    firstindex = 1;
  }
  img[firstindex - 1].style.display = "block";
}
