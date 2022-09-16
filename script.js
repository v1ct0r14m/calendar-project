$(document).ready(function(){
//MOMENT FOR DATE AND TIME
let NowMoment = moment().format("MMMM do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = NowMoment;
let currentHour = moment().format("HH");


   
// local storage lord
$('.save').click(function(){
        console.log('click')
    })




localStorage.setItem(key:hour, value:day)


//parent siblings javascript 4 lyfe