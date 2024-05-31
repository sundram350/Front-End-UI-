let scroller = document.querySelector(".gallery");
let btnback = document.getElementById("btnback");
let btnnext = document.getElementById("btnnext");
scroller.addEventListener("wheel", (eve) => {
  eve.preventDefault();
  scroller.scrollLeft += eve.deltaY;
});

btnnext.addEventListener("click", () => {
  scroller.scrollLeft += 900;
});
btnback.addEventListener("click", () => {
  scroller.scrollLeft -= 900;
});
