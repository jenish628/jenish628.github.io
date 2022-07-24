window.onload = function () {
    document.getElementById ("textarea").style.fontSize = "12pt";
}

function bigger () {
    alert ("Hello, World")
    setInterval(IncreaseFontSize, 500);
}

function checkbox ()
{
    var x = document.getElementById("bling");
    if (x.checked){
        document.getElementById("textarea").style.fontWeight= "bold";
        document.getElementById("textarea").style.color = "green";
        document.getElementById("textarea").style.textDecoration = "underline";
        // The image is not working. But the given url and it's method is given below:
        s 
        document.getElementById("body").style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')"  
    }
    else{
        document.getElementById("textarea").style.fontWeight= "normal";
        document.getElementById("textarea").style.color = "black";
        document.getElementById("textarea").style.textDecoration = "none";
    }
}

function IncreaseFontSize (){
    let size = document.getElementById ("textarea").style.fontSize;
    size = parseInt(size);
    document.getElementById ("textarea").style.fontSize = size +2 + "pt"; 
}