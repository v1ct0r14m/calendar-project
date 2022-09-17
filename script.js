$(document).ready(function(){
//MOMENT FOR DATE AND TIME****
let NowMoment = moment().format("MMMM do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = NowMoment;
let currentDay = moment().format("HH");

});



// parent siblings javascript 4 lyfe
$('.save').click(function (event) {
    event.displayDate();
    var value = $(this).siblings(".hour").val();
    var time = $(this).parent().attr("id").split("-")[1]
    localStorage.setItem(time, value);

});

// local storage lord
$("#900 .time-block").val(localStorage.getItem("0900"));
$("#1000 .time-block").val(localStorage.getItem("1000"));
$("#1100 .time-block").val(localStorage.getItem("1100"));
$("#1200 .time-block").val(localStorage.getItem("1200"));
$("#1300 .time-block").val(localStorage.getItem("1300"));
$("#1400 .time-block").val(localStorage.getItem("1400"));
$("#1500 .time-block").val(localStorage.getItem("1500"));
$("#1600 .time-block").val(localStorage.getItem("1600"));
$("#1700 .time-block").val(localStorage.getItem("1700"));
$("#1800 .time-block").val(localStorage.getItem("1800"));

});