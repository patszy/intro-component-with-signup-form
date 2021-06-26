const button = document.querySelector(`.form__btn`);
const inputs = document.querySelectorAll(`.form input`);
const checkInputValidation = (input) => input.checkValidity() ? input.parentElement.classList.remove("label--error") : input.parentElement.classList.add("label--error");

button.addEventListener('click', (event) => {
    event.preventDefault()

    for (const input of inputs) checkInputValidation(input);

    event.target.parentElement.submit();
})