$(document).ready(function () {
    $ ("#view_button").click(getPicture);
});


    function getPicture () {
        $.ajax({
            url: "https://api.nasa.gov/planetary/apod?api_key=iAzyoMtYrPv6u89G3sRRkKvLciFNhUWUPXoJoGdg",
            type: "GET",
            data: {
                api_key: "DEMO_KEY",
                date: $("#date").val()
            },
            dataType: "json",
            "success": picture,
            "error": noPicture
        });
    };

    function picture (data) {
        console.log(JSON.stringify(data));
        $("#pic").attr("src", data.url);
        $("#pic-title").text(data.title);
        $("#pic-desc").text(data.explanation)
    };

    function noPicture () {
        alert(error.responseText);
    };