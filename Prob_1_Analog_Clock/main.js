const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds")

function actualTime() {//get the information about the hour
    time = new Date();

    hr = time.getHours();
    min = time.getMinutes();
    sec = time.getSeconds();

    hrHand = 30 * hr + min/2;//calculate the movement
    minHand = 6 * min;
    secHand = 6 * sec;

    hour.style.transform = `rotate(${hrHand}deg)`;//adding rotation to the hands
    minutes.style.transform = `rotate(${minHand}deg)`;
    seconds.style.transform = `rotate(${secHand}deg)`;
}

setInterval(actualTime,1000);

actualTime();