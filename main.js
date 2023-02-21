const cube = document.querySelector('#cube')
const adviceId = document.querySelector('#advice_id')
const text = document.querySelector('.advice_text')


cube.addEventListener('click', getQuote)

function getQuote(){
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => data.slip)
    .then(data =>  {
        adviceId.innerHTML = data.id,
        text.innerHTML = data.advice
    })
    .catch(error => console.log(error))
       
    
}