const link = document.querySelector('a.stylingmode');
let storedMode = localStorage.getItem("styling");

//sets mode from previous sessions if stored
setStylingMode(storedMode);

function setStylingMode(mode){
  const css = document.querySelector('link.stylingmode');
  switch (mode.toUpperCase()) {
    case "LIGHTMODE":
      mode = 'LightMode';
      css.href = 'css/lightmode.css';
      link.innerHTML = "DarkMode";
      break;

    case "DARKMODE":
      mode = 'DarkMode';
      css.href = 'css/darkmode.css';
      link.innerHTML = "LightMode";
      break;

    default:
      console.log("default");
      mode ="LightMode";
  }
  localStorage.setItem("styling", mode);
}

//addEventListener for the styling link
link.addEventListener('click', () => {
  setStylingMode(link.innerHTML);
});
