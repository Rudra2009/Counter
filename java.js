//const add = document.querySelector(".click");
//const sub = document.querySelector(".sub");
//const resetcount = document.querySelector(".reset");
const count = document.querySelector(".count");
const btns = document.querySelector(".btns");

btns.addEventListener("click", (e) => {
  if (e.target.classList.contains("click")) {
    count.innerHTML++;
    difcolor();
  }
  if (e.target.classList.contains("sub")) {
    count.innerHTML--;
    difcolor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    difcolor();
  }
});

function difcolor() {
  if (count.innerHTML > 0) {
    count.style.color = "green";
  } else if (count.innerHTML < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "orange";
  }
}
