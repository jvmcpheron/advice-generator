// variables from dom

let adviceText = document.getElementById('advice-text');
let btn = document.getElementById('dice-btn');
let adviceNumber = document.getElementById('number');




let applyAdvice = (adviceNumData, adviceData) => {
    adviceText.innerHTML = adviceData;
    adviceNumber.innerHTML = adviceNumData;
}

btn.addEventListener('click' , () =>{
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