function day(event) {
  event.preventDefault();
  if (lightmode.style.backgroundColor == "#ffffff") {
    darkmode.classList.remove("active");
    lightmode.classList.add("active");
    let sky = document.querySelector("body");
    sky.style.background = `url("https://i.gifer.com/WMV.gif")`;
    sky.style.backgroundSize = "cover";
    let cat = document.querySelector("img");
    cat.setAttribute("src", `https://i.gifer.com/5Xyr.gif`);
    let backdrop = document.querySelector(".section-two");
    backdrop.style.backgroundImage =
      "linear-gradient( -225deg, #5d9fff 0%, #b8dcff 48%, #6bbbff 100%)";
    let title = document.querySelector("h2");
    title.style.color = "black";
    let paragraph = document.querySelector("p");
    paragraph.style.color = "black";
  }
}
let lightmode = document.querySelector("input");
lightmode.addEventListener("click", day);

function night(event) {
  event.preventDefault();
  if (darkmode.style.backgroundColor == "#OD6EFD") {
    darkmode.classList.add("active");
    lightmode.classList.remove("active");
    let sky = document.querySelector("body");
    sky.style.background = `url("https://cdna.artstation.com/p/assets/images/images/060/558/020/original/anna-teather-fantasy-bk-anim.gif?1678825942")`;
    sky.style.backgroundSize = "cover";
    let cat = document.querySelector("img");
    cat.setAttribute("src", `https://i.gifer.com/7V6.gif`);
    cat.style.padding = "40px";
    let backdrop = document.querySelector(".section-two");
    backdrop.style.backgroundImage =
      "linear-gradient(to top, #2980b9, #00265f)";
    let title = document.querySelector("h2");
    title.style.color = "white";
    let paragraph = document.querySelector("p");
    paragraph.style.color = "white";
  }
}

let darkmode = document.querySelector("input");
darkmode.addEventListener("click", night);
