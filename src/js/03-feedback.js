
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector("input");
const message = document.querySelector('textarea');
const formData = {};
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 1000))

populateInputs();

function onInput(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) {
    e.preventDefault();

    e.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
}

function populateInputs() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedData);
    if (savedData) {
        if (savedData.email) {
            email.value = savedData.email;
        }
        if (savedData.message) {
            message.value = savedData.message;
        }
    }
}