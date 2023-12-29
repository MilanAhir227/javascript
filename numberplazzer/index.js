let totalbtn = 9;
let arr = [];
let gameArea = document.querySelector("#gamearea");

function numGenerator() {
    for (let i = 0; i < totalbtn - 1; i++) {
        let value = Math.floor(Math.random() * 8 + 1);
        if (arr.includes(value)) {
            i--;
            continue;
        }
        arr.push(value);
    }
    arr.push(".");
    console.log(arr);
    btnGen();
}

function btnGen() {
    for (let i = 0; i < arr.length; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = arr[i];
        if (i % 3 === 0) {
            gameArea.innerHTML += "<br>";
        }
        btn.setAttribute("class", "btn");
        btn.setAttribute("id", `btn${i + 1}`);
        btn.setAttribute("draggable","true")
        gameArea.append(btn);
    }

    // Make the buttons draggable using jQuery UI
    $(".btn").draggable({
        revert: "invalid",
        helper: "clone",
    });

    // Make the game area droppable
    $("#gamearea").droppable({
        accept: ".btn",
        drop: function (event, ui) {
            let droppedBtn = ui.helper.clone();
            ui.helper.remove();
            $(this).append(droppedBtn);
        },
    });
}

$(document).ready(function () {
    numGenerator();
});
