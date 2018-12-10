document.addEventListener("DOMContentLoaded", function() {
  const main = document.querySelector("main");
  const createBtn = document.getElementById("create");
  const resetBtn = document.getElementById("reset");
  const deleteBtn = document.getElementById("delete");
  const randomBtn = document.getElementById("random");
  const rainbowBtn = document.getElementById("rainbow");

  let rgbaCounter = 1;

  createBtn.addEventListener("click", askUser);
  resetBtn.addEventListener("click", resetGrid);
  deleteBtn.addEventListener("click", deleteGrid);
  randomBtn.addEventListener("click", randomColor);
  rainbowBtn.addEventListener("click", rainbowMode);

  function rainbowMode() {
    const hover = Array.from(main.childNodes);
    hover.forEach(function(e) {
      e.addEventListener("mouseenter", function() {
        randomColor();
      });
    });
  }

  function randomColor() {
    let random = Array.from(main.childNodes);
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    console.log(`Random num rgb: rgb(${r}, ${g}, ${b});`);

    random.forEach(function(e) {
      e.addEventListener("mouseenter", function() {
        this.setAttribute("style", `background: rgb(${r}, ${g}, ${b});`);
      });
    });
  }

  function askUser() {
    let width = prompt("Width");
    createGrid(width);
  }

  function resetGrid() {
    const gridElement = Array.from(main.childNodes);
    gridElement.forEach(function(e) {
      console.log("asa");
      e.setAttribute("style", `background: white; `);
    });
  }

  function deleteGrid() {
    const divs = Array.from(main.childNodes);
    divs.forEach(function(e) {
      e.parentNode.removeChild(e);
    });
  }

  function changeOpacity() {
    if (rgbaCounter < 9) {
      rgbaCounter++;
    }
  }

  function createGrid(w) {
    deleteGrid();
    let divsNeeded = w * w;

    for (let i = 0; i <= divsNeeded - 1; i++) {
      const createdDiv = document.createElement("div");
      main.appendChild(createdDiv);
    }

    const hover = Array.from(main.childNodes);
    hover.forEach(function(e) {
      // e.setAttribute("style", `border: 1px dotted black;`);

      e.addEventListener("mouseenter", function() {
        changeOpacity();
        this.setAttribute(
          "style",
          `background: rgba(0, 0, 0, 0.${rgbaCounter});`
        );
      });
    });

    main.setAttribute(
      "style",
      `border: 2px solid black; width: 50vh; margin: auto; height: 50vh; background: white; display: grid; grid-template-columns: repeat(${w}, 1fr); grid-template-rows: repeat(${w}, 1fr);`
    );
  }

  createGrid(16);
});
