
//formation of arrays
var daysOfWeek = 
[
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    
];
var maleNames =
[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
    

];
var femaleNames =
[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
   
];
    function getAkanName(){
    var year = parseInt(document.getElementById("year").value)
    var month = parseInt(document.getElementById("month").value)
    var day = parseInt(document.getElementById("day").value)
    var male = document.getElementById("male")
    var female = document.getElementById("female")


    if(day<=0||day>=32)
    alert("error!! enter valid days");
    else if(month<0||month>12 ||month== 2 && day>29);
    alert("error!! enter valid month");


    var day = new Date(year +"/" + month + "/" + day);

    var birthDay = day.getDay();
    if(male.checked== true){
        alert(" You were born on" + daysOfWeek [birthDay]+ " and your akan name is" + maleNames);
    }

    else if (female.checked== true){
        alert(" You were born on" +daysOfWeek[birthDay] +" and your akan name is" + female);
    }

    

};