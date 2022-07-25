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


function converts(){
    var x = document.getElementById("textarea").value.trim();
    const s = x.split(" ");
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ];
    console.log(s);
    var res = s.map( item => {
        if(vowels.indexOf(item.charAt(0)) == -1){    // If the word starts with consonants
            return item.substring(1) + item.charAt(0) + "-ay";
        }else{
            return item + "-ay";
        }
    });

    document.getElementById("output1").innerHTML = res;
    
}

function malk (){
    var x = document.getElementById("textarea").value;
    const y = x.split(" ");
    var res = y.map(element => {
        if (element.length >= 5){
            return "Malkovitch";
        }else{
            return element;
        }
    }).filter(a => a);
    document.getElementById("output2").innerHTML = res;
}