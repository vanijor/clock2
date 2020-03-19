const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

setInterval(updateClock, 1000);

function updateClock() {
    var date = new Date();
    let sec = (date.getSeconds() / 60) * 360;
    let min = (date.getMinutes() / 60) * 360;
    let hour = (date.getHours() / 12) * 360;
    
    secDiv.style.transform = `rotate(${sec}deg)`;
    minDiv.style.transform = `rotate(${min}deg)`;
    hourDiv.style.transform = `rotate(${hour}deg)`;
    
}

setInterval(clockDigital, 500);

function clockDigital() {
    const clock = document.getElementById('clock');
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    /* var amPM = (hours < 12) ? "AM" : "PM"; */
    /* hours = (hours > 12) ? hours - 12 : hours;*/
    if(hours < 10){
        hours = "0" + hours;
    } 
    if (minutes < 10){
        minutes = "0" + minutes;
    } 
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    clock.innerHTML = hours + " : " + minutes + " : " + seconds;
}