function toggleDarkMode(event) {
  event.preventDefault();
  if (event.target.checked) {
    image.setAttribute(
      "src",
      `https://i.pinimg.com/originals/14/2f/92/142f929303f5b7f3b36677c76535457f.gif`
    );
    document.querySelector("body").classList.add("darkmode");
  } else {
    document.querySelector("body").classList.remove("darkmode");
    image.setAttribute("src", `https://i.gifer.com/5Xyr.gif`);
  }


}

let image = document.querySelector("img");
let darkmodeSwitch = document.querySelector("#flexSwitchCheckDefault");
darkmodeSwitch.addEventListener("change", toggleDarkMode);

