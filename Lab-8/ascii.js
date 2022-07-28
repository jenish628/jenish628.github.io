
let counter = 0;
let timerInterval;
let delayMs = 250;
let frames;
let frameArr;

$(document).ready(function () {


    $("#stop").prop("disabled", true);

    $("#start").click(function () { 
        startAnimation();
        
    });

    $("#sizeSelect").change(function () {
        if ($("#start").prop("disabled")) {
            startAnimation();
        }
    });

    $("#animationselect").change(function () {
        if ($("#start").prop("disabled")) {
            startAnimation();
        }
    });

    $('#speed').change(function () {
        startAnimation();
    })
});

function startAnimation() {
    let animationselect = $("#animationselect").val();
    frames = ANIMATIONS[animationselect];
    frameArr = frames.split("=====\n");
    playAnimation();
    changesizeSelect();
    $("#start").prop("disabled", true);
    $("#stop").prop("disabled", false);
}

function changesizeSelect() {
    const sizeSelect = $("#sizeSelect").val();
    $("#textWriter").css("fontsizeSelect", sizeSelect);
}


function playAnimation() {
    clearInterval(timerInterval);
    var isTurbo = $("#speed").prop("checked");

    if (isTurbo) {
        delayMs = 50;
    } else {
        delayMs = 250;
    }
    timerInterval = setInterval(animateDiagram, delayMs);
}

function animateDiagram() {
    if (counter >= frameArr.length) {
        counter = 0;
    } else {
        $("#textWriter").val(frameArr[counter]);
        counter++;
    }
}