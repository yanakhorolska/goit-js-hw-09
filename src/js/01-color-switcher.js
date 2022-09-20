


const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
};




const PROMPT_DELAY = 1000;
let promptCounter = 0;
let intervalId = null;



refs.startBtn.addEventListener('click', startSwitch);
refs.stopBtn.addEventListener('click', stopSwitch);




function startSwitch() {
    
    intervalId = setInterval(() => {
        const backColor = getRandomHexColor();
        refs.body.style.backgroundColor = backColor;
        promptCounter += 1;
        refs.startBtn.setAttribute('disabled', '');
    }, PROMPT_DELAY);
    
}




function stopSwitch() {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled', '');
}





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}