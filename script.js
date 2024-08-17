
const secondHand = document.querySelector('.sec')
const minsHand = document.querySelector('.min')
const hrHand = document.querySelector('.hr')

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`

    const mins = now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`

    const hrs = now.getMinutes();
    const hrsDegree = ((mins / 12) * 360) + 90;
    hrHand.style.transform = `rotate(${hrsDegree}deg)`

    console.log(seconds);
}

setInterval(setDate,1000);