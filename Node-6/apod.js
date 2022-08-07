$(document).ready(function () {
    $ ("#view_button").click(getPicture);
});


    function getPicture () {
        const date = $("#date").val()
        fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=0AJH3YGVbm8W6Ay9sNegG4sedHNzr6zBkoOh53WA`).then (res => res.json()).then (data => picture(data)).catch(err => noPicture())
    };

    function picture (data) {
        console.log(JSON.stringify(data));
        $("#pic").attr("src", data.url);
        $("#title").text(data.title);
        $("#pic-desc").text(data.explanation)
    };

    function noPicture () {
        alert(error.responseText);
    };