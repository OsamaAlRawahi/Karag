

function changeGallary(){
    var leftImage = String( document.getElementById("image1").src);
    var leftImageTitle = String(document.getElementById("image1title").innerHTML);

    document.getElementById('image1').src = document.getElementById("image3").src;
    document.getElementById('image1title').innerHTML = document.getElementById("image3title").innerHTML;

    document.getElementById('image3').src = document.getElementById("image2").src;
    document.getElementById('image3title').innerHTML = document.getElementById("image2title").innerHTML;

    document.getElementById('image2').src = leftImage;
    document.getElementById('image2title').innerHTML = leftImageTitle;
}

function updateTime(){
    var DateNow = new Date();
    var GazaTime = new Date();

    GazaTime.setHours(DateNow.getHours() - 2);
    var textLine = "Welcome to the Karag website! Today is ";
    textLine += DateNow.toDateString() + ", and the time is ";

    var hours = parseInt(DateNow.getHours());
    var minutes = parseInt(DateNow.getMinutes());
    var seconds = parseInt(DateNow.getSeconds());

    var hoursGaza = parseInt(GazaTime.getHours());

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    if(hoursGaza < 10){
        hoursGaza = "0" + hoursGaza;
    }

    textLine += hours + ":" + minutes + ":" + seconds;
    textLine += " ( " + hoursGaza + ":" + minutes + ":" + seconds + " Gaza Time )";
    document.getElementById("dateUpdate").innerHTML = textLine;
}

setInterval("updateTime()", 1000);
setInterval("changeGallary()",3000);

