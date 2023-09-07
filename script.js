const adviceNumber = document.querySelector('#adviceNumber')
const advice = document.querySelector('#advice')
const button = document.querySelector('#button')

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            adviceNumber.textContent = "#" + data.slip.id;

            advice.textContent = '"' + data.slip.advice + '"'

            console.log(data);

        })
        .catch(error => {
            console.error('Error:', error);
        });
}

fetchAdvice()

button.addEventListener('click', fetchAdvice)