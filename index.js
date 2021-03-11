function addPlayer() {
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let country = document.getElementById("country").value;
  let pScore = document.getElementById("pScore").value;
  let chk = formValidation(fName, lName, country, pScore);
  if (chk) {
    let player = document.getElementById("player");
    let cnt = document.getElementById("player").childElementCount;
    let id = `div${cnt + 1}`;

    let rowNew = `<div id="${id}" class="row row-cols-auto">
    <div class="col flex-col"><label>${
      fName.toUpperCase() + " " + lName.toUpperCase()
    }</label><label class="date-time">${currentDateAndTime()}</label></div>
    <div class="col">${country.toUpperCase()}</div>
    <div id="score" class="col">${pScore}</div>
    <div class="col flex"><span class="circle" onclick="deleteRow(${id})"><img class="img-pos" src="./img/trash.svg" /></span>
    <span class="circle" onclick="changeScore(${id}, 'plus')"><label class="label-pos">+5</label></span>
    <span class="circle" onclick="changeScore(${id}, 'minus')"><label class="label-pos">-5</label></span></div>
  </div>`;
    player.innerHTML += rowNew;
  }
}

function formValidation(firstName, lastName, country, playerScore) {
  let check = true;
  if (
    firstName === "" ||
    lastName === "" ||
    country === "" ||
    playerScore === ""
  ) {
    document.getElementsByClassName("error")[0].style.display = "block";
    setTimeout(() => {
      document.getElementsByClassName("error")[0].style.display = "none";
    }, 2000);
    check = false;
  }
  return check;
}

function deleteRow(id) {
  document.getElementById(id.id).remove();
}

function changeScore(id, param) {
  let score = id.querySelector("#score").textContent;
  if (param === "plus") {
    id.querySelector("#score").textContent = parseInt(score) + 5;
  } else {
    id.querySelector("#score").textContent = parseInt(score) - 5;
  }
}

function currentDateAndTime() {
  var currentdate = new Date();
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  var datetime =
    monthNames[currentdate.getMonth()] +
    " " +
    currentdate.getDate() +
    " , " +
    //+ (currentdate.getMonth()+1)  + "/"
    currentdate.getFullYear() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes();

  return datetime;
}
