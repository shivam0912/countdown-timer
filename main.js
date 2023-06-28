const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minElement = document.getElementById("mins");
const secElement = document.getElementById("seconds");

const targetDate = new Date("2023-12-31T23:59:59");
console.log(hoursElement)
setInterval(function(){
    const currentDate = new Date();
    
    const timeDifference = Math.floor((targetDate-currentDate)/1000);
    const remainingDays = Math.floor(timeDifference / (60 * 60 * 24));
    const remainingHours = Math.floor((timeDifference % (60 * 60 * 24)) / (60 * 60));
    const remainingMinutes = Math.floor((timeDifference % (60 * 60)) / 60);
    const remainingSeconds = Math.floor(timeDifference % 60);

    //update the countdown display

    daysElement.textContent = remainingDays;
    hoursElement.textContent = remainingHours;
    minElement.textContent = remainingMinutes;
    secElement.textContent = remainingSeconds;
  
},1000)