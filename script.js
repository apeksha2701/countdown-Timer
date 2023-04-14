var daysE1 = document.getElementById('days')
var hoursE1 = document.getElementById('hours')
var minutesE1 = document.getElementById('minutes')
var secondsE1 = document.getElementById('seconds')

function countdownTimer(){
    const countDownDate = new Date('04/13/2023').getTime()

    // convert to milliseconds
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    // calculate every second
    const interval = setInterval(() => {

    //get Current Date
    const now = new Date().getTime()
    const distance = countDownDate - now

    daysE1.innerText = formatNumber(Math.floor(distance / day))
    hoursE1.innerText = formatNumber(Math.floor((distance % day)/hour))
    minutesE1.innerText = formatNumber(Math.floor((distance % hour)/minute))
    secondsE1.innerText = formatNumber(Math.floor((distance % minute)/second))

    //when date is reached
    if(distance<0){
        document.getElementById('headline').innertext = 'our website is ready'
        document.getElementById('countdown').style.display='none'

        //stop interval
        clear (interval)
    }
    } ,3000)
}

//Add 0 if number is small then 10 ....8--->08
function formatNumber(number){
    if(number<10){
        return '0'+ number
    }
    return number 
}
// Run Function
countdownTimer()
