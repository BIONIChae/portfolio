function toggleDarkMode(event) {
  event.preventDefault();
  if (event.target.checked) {
    document.querySelector("body").classList.add("darkmode");
  } else {
    document.querySelector("body").classList.remove("darkmode");
  }
}

let darkmodeSwitch = document.querySelector("#flexSwitchCheckDefault");
darkmodeSwitch.addEventListener("change", toggleDarkMode);
