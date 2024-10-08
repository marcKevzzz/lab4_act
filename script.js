// Instruction no.1
const p = document.getElementById("paragraph");
function handleClick() {
  if (p.style.fontSize === "20px") {
    p.style.fontFamily = "Arial";
    p.style.fontSize = "16px";
    p.style.color = "black";
  } else {
    p.style.fontFamily = "Lucida Grande";
    p.style.fontSize = "20px";
    p.style.color = "#ff4800";
  }
}

// Instruction no.2
p.onmouseover = function () {
  this.style.backgroundColor = "skyblue";
};
p.onmouseleave = function () {
  this.style.backgroundColor = "transparent";
};

function handleSubmit(x, y) {
  const p1 = document.getElementById(y);
  p1.innerHTML = x.value;
  p1.style.textTransform = "uppercase";
  if (x.value != "") {
    p1.classList.add("Para");
  } else {
    p1.classList.remove("Para");
  }
}

function insert_Row() {
  const row = document.createElement("tr");
  document.getElementById("sampleTable").appendChild(row);

  const heightCell = document.createElement("td");
  row.appendChild(heightCell);
  const heightInput = document.createElement("input");
  heightInput.placeholder = "Height (cm)";
  heightCell.appendChild(heightInput);
  heightInput.style.border = "none";

  const weightCell = document.createElement("td");
  row.appendChild(weightCell);
  const weightInput = document.createElement("input");
  weightInput.placeholder = "Weight (kg)";
  weightCell.appendChild(weightInput);
  weightInput.style.border = "none";
}
// Instruction no.3 - letter C
function addList() {
  const li = document.createElement("li");
  document.getElementById("ul").appendChild(li);
  li.innerHTML = document.getElementById("names").value;
}

function handleClear() {
  document.getElementById("ul").innerHTML = "";
}

// Instruction no.3 - letter D
function handleZoom(x) {
  if (x.style.scale == "1.5") {
    x.style.scale = "1";
  } else {
    x.style.scale = "1.5";
  }
}

// Instruction no.3 - letter E
function handleRandomizer() {
  const RanHexColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + RanHexColor;
  console.log(Math.random());
  console.log(RanHexColor);
}

function handleBgDef() {
  document.body.style.backgroundColor = "white";
}
