function validar(){
    var user, email, contraseña, contraseña2;
    user = document.getElementById("user").value;
    email = document.getElementById("email").value;
    user = document.getElementById("contraseña").value;
    user = document.getElementById("contraseña2").value;
    
    if(user === "" || email === "" || contraseña === "" || contraseña2 === ""){
        alert("Campo obligatorio");
        return false;
    }
}

let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

let endDate = new Date(2023,2,5,16,30);

let endTime = endDate.getTime();

function countdown(){
    let todayDate= new Date();
    let todayTime =todayDate.getTime();
    let remaningTime = endTime - todayTime;

    let oneMin = 60 * 1000;

    let oneHr = 60 * oneMin;

    let oneDay = 24 * oneHr;

    let addZeroes = num => num  < 10 ? `0${num}`: num;

    if (endTime<todayTime){
        clearInterval(i);
        document.querySelector(".countdown").innerHTML = `<h1>Termino cuenta regresiva</h1>`;

    }

    else{
        let daysLeft = Math.floor(remaningTime / oneDay);
        let hrLeft = Math.floor((remaningTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remaningTime% oneHr)/oneMin)
        let secsLeft = Math.floor((remaningTime% oneMin)/1000);
        dayBox.textContent = addZeroes (daysLeft);
        hrBox.textContent = addZeroes (hrLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent =addZeroes(secsLeft);
    }

}
let i = setInterval(countdown,1000);
countdown();

