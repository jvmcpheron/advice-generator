// variables from dom

let adviceText = document.getElementById('advice-text');
let btn = document.getElementById('dice-btn');
let adviceNumber = document.getElementById('number');



// a lil animation js

let rotation = 0;

const rotateDice = () => {
    // rotates the dice img 360 degress over .7 seconds on click
    rotation += 360;
    if (rotation === 720) rotation = 0;
    btn.style.transitionDuration = "0.4s";
    btn.style.transform = `rotate(${rotation}deg)`;
};




let applyAdvice = (adviceNumData, adviceData) => {
    adviceText.innerHTML = adviceData;
    adviceNumber.innerHTML = adviceNumData;
}

btn.addEventListener('click' , () =>{
    rotateDice();
    var adviceFetch = fetch(
        'https://api.adviceslip.com/advice',
        {
            method: 'GET',
        }
    ).then(response => response.json() 
    ).then(data => {
        console.log(data);
        let adviceData = data.slip.advice;
        let adviceNumData= data.slip.id;
        console.log(adviceData);

        applyAdvice(adviceNumData, adviceData);
    });
    
})



