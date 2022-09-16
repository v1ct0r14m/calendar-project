$(document).ready(function(){
//MOMENT FOR DATE AND TIME
let NowMoment = moment().format("MMMM do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = NowMoment;
let currentHour = moment().format("HH");

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



});