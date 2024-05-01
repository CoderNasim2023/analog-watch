function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourDeg = (hour % 12) * 30 + (minute / 60) * 30;
    const minDeg = minute * 6 + (second / 60) * 6;
    const secDeg = second * 6;

    const hourHand = document.querySelector('.hour');
    const minHand = document.querySelector('.min');
    const secHand = document.querySelector('.sec');

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    secHand.style.transform = `rotate(${secDeg}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
