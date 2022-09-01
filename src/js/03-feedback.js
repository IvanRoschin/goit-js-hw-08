import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

console.log(refs.textarea);

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

// throttle(onFormInput, 500),

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log('formData', formData);
});
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateFormData();

function onFormInput() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log('Значение объекта с данными', formData);
}

function populateFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  const parsedData = JSON.parse(savedData);
  console.log(parsedData);

  if (parsedData) {
    console.log(STORAGE_KEY);
    refs.textarea.value = parsedData.message;
    refs.email.value = parsedData.email;
  }
}
