let computer = true;
let arr = [];

document.addEventListener("click", function (event) {
  let id = event.target.id;

  if (id == "start") {
    let player = document.querySelector("select#player").value;

    if (player == "ovo") {
      computer = false;
    }

    let select = document.querySelector("select#formate").value;
    let area = document.querySelector("#area");
    for (let i = 0; i < select * select; i++) {
      let btn = document.createElement("button");
      btn.innerHTML = ".";
      if (i % select == 0) {
        area.innerHTML += "<br>";
      }
      btn.setAttribute("id", "btn" + (i + 1));
      btn.setAttribute("class", "btn");
      btn.setAttribute("onclick", "btnpress(this)");
      area.append(btn);
      document.querySelector(".select").classList.add("hide");
    }
  }
});

let i = 1;
function btnpress(event) {
  let id = event.id;

  if (computer) {
    botfil(id);
  } else {
    if (i % 2 == 0) {
      document.getElementById(id).innerHTML = "o";
      document.getElementById(id).setAttribute("disabled", "true");
      i++;
    } else {
      document.getElementById(id).innerHTML = "x";
      document.getElementById(id).setAttribute("disabled", "true");
      i++;
    }
  }

  checkwinner();
}

function botfil(id) {
  document.getElementById(id).innerHTML = "o";
  document.getElementById(id).setAttribute("disabled", "true");
  arr.push(parseInt(id.slice(3, 5)));

  let random = randomNum();
  document.getElementById("btn" + random).innerHTML = "x";
  document.getElementById("btn" + random).setAttribute("disabled", "true");
  arr.push(random);
}

function randomNum() {
  let total = document.querySelectorAll(".btn").length;
  let random = Math.floor(Math.random() * total + 1);
  while (arr.includes(random)) {
    random = Math.floor(Math.random() * total) + 1;
  }
  return parseInt(random);
}
let j = 0;
function checkwinner() {
  j++;

  let btn = document.querySelectorAll(".btn");

  if (btn.length == 9) {
    if (
      (btn[0].innerHTML == "x" &&
        btn[1].innerHTML == "x" &&
        btn[2].innerHTML == "x") ||
      (btn[0].innerHTML == "o" &&
        btn[1].innerHTML == "o" &&
        btn[2].innerHTML == "o")
    ) {
      $("#win").html(btn[0].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[3].innerHTML == "x" &&
        btn[4].innerHTML == "x" &&
        btn[5].innerHTML == "x") ||
      (btn[3].innerHTML == "o" &&
        btn[4].innerHTML == "o" &&
        btn[5].innerHTML == "o")
    ) {
      $("#win").html(btn[3].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[6].innerHTML == "x" &&
        btn[7].innerHTML == "x" &&
        btn[8].innerHTML == "x") ||
      (btn[6].innerHTML == "o" &&
        btn[7].innerHTML == "o" &&
        btn[8].innerHTML == "o")
    ) {
      $("#win").html(btn[6].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[0].innerHTML == "x" &&
        btn[3].innerHTML == "x" &&
        btn[6].innerHTML == "x") ||
      (btn[0].innerHTML == "o" &&
        btn[3].innerHTML == "o" &&
        btn[6].innerHTML == "o")
    ) {
      $("#win").html(btn[0].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[1].innerHTML == "x" &&
        btn[4].innerHTML == "x" &&
        btn[7].innerHTML == "x") ||
      (btn[1].innerHTML == "o" &&
        btn[4].innerHTML == "o" &&
        btn[7].innerHTML == "o")
    ) {
      $("#win").html(btn[1].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[2].innerHTML == "x" &&
        btn[5].innerHTML == "x" &&
        btn[8].innerHTML == "x") ||
      (btn[2].innerHTML == "o" &&
        btn[5].innerHTML == "o" &&
        btn[8].innerHTML == "o")
    ) {
      $("#win").html(btn[2].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[0].innerHTML == "x" &&
        btn[4].innerHTML == "x" &&
        btn[8].innerHTML == "x") ||
      (btn[0].innerHTML == "o" &&
        btn[4].innerHTML == "o" &&
        btn[8].innerHTML == "o")
    ) {
      $("#win").html(btn[0].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[2].innerHTML == "x" &&
        btn[4].innerHTML == "x" &&
        btn[6].innerHTML == "x") ||
      (btn[2].innerHTML == "o" &&
        btn[4].innerHTML == "o" &&
        btn[6].innerHTML == "o")
    ) {
      $("#win").html(btn[2].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    }
  } else if (btn.length == 16) {
    if (
      (btn[0].innerHTML == "x" &&
        btn[1].innerHTML == "x" &&
        btn[2].innerHTML == "x" &&
        btn[3].innerHTML == "x") ||
      (btn[0].innerHTML == "o" &&
        btn[1].innerHTML == "o" &&
        btn[2].innerHTML == "o" &&
        btn[3].innerHTML == "o")
    ) {
      $("#win").html(btn[0].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[4].innerHTML == "x" &&
        btn[5].innerHTML == "x" &&
        btn[6].innerHTML == "x" &&
        btn[7].innerHTML == "x") ||
      (btn[4].innerHTML == "o" &&
        btn[5].innerHTML == "o" &&
        btn[6].innerHTML == "o" &&
        btn[7].innerHTML == "o")
    ) {
      $("#win").html(btn[4].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[8].innerHTML == "x" &&
        btn[9].innerHTML == "x" &&
        btn[10].innerHTML == "x" &&
        btn[11].innerHTML == "x") ||
      (btn[8].innerHTML == "o" &&
        btn[9].innerHTML == "o" &&
        btn[10].innerHTML == "o" &&
        btn[11].innerHTML == "o")
    ) {
      $("#win").html(btn[8].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[12].innerHTML == "x" &&
        btn[13].innerHTML == "x" &&
        btn[14].innerHTML == "x" &&
        btn[15].innerHTML == "x") ||
      (btn[12].innerHTML == "o" &&
        btn[13].innerHTML == "o" &&
        btn[14].innerHTML == "o" &&
        btn[15].innerHTML == "o")
    ) {
      $("#win").html(btn[12].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[0].innerHTML == "x" &&
        btn[4].innerHTML == "x" &&
        btn[8].innerHTML == "x" &&
        btn[12].innerHTML == "x") ||
      (btn[0].innerHTML == "o" &&
        btn[4].innerHTML == "o" &&
        btn[8].innerHTML == "o" &&
        btn[12].innerHTML == "o")
    ) {
      $("#win").html(btn[0].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[1].innerHTML == "x" &&
        btn[5].innerHTML == "x" &&
        btn[9].innerHTML == "x" &&
        btn[13].innerHTML == "x") ||
      (btn[1].innerHTML == "o" &&
        btn[5].innerHTML == "o" &&
        btn[9].innerHTML == "o" &&
        btn[13].innerHTML == "o")
    ) {
      $("#win").html(btn[1].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[2].innerHTML == "x" &&
        btn[6].innerHTML == "x" &&
        btn[10].innerHTML == "x" &&
        btn[14].innerHTML == "x") ||
      (btn[2].innerHTML == "o" &&
        btn[6].innerHTML == "o" &&
        btn[10].innerHTML == "o" &&
        btn[14].innerHTML == "o")
    ) {
      $("#win").html(btn[2].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[3].innerHTML == "x" &&
        btn[7].innerHTML == "x" &&
        btn[11].innerHTML == "x" &&
        btn[15].innerHTML == "x") ||
      (btn[3].innerHTML == "o" &&
        btn[7].innerHTML == "o" &&
        btn[11].innerHTML == "o" &&
        btn[15].innerHTML == "o")
    ) {
      $("#win").html(btn[3].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[0].innerHTML == "x" &&
        btn[5].innerHTML == "x" &&
        btn[10].innerHTML == "x" &&
        btn[15].innerHTML == "x") ||
      (btn[0].innerHTML == "o" &&
        btn[5].innerHTML == "o" &&
        btn[10].innerHTML == "o" &&
        btn[15].innerHTML == "o")
    ) {
      $("#win").html(btn[0].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    } else if (
      (btn[3].innerHTML == "x" &&
        btn[6].innerHTML == "x" &&
        btn[9].innerHTML == "x" &&
        btn[12].innerHTML == "x") ||
      (btn[3].innerHTML == "o" &&
        btn[6].innerHTML == "o" &&
        btn[9].innerHTML == "o" &&
        btn[12].innerHTML == "o")
    ) {
      $("#win").html(btn[2].innerHTML + " is win");
      $(".btn").prop("disabled", true);
    }
  }
  if (j == btn.length) {
    $("#win").html("Draw the match");
    $("#win").css("color", "red");
    $(".btn").prop("disabled", true);
  }
  console.log(arr);
}
