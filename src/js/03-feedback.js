import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

populateFormData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
});
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Значение объекта с данными', formData);
  evt.currentTarget.reset();
  
  reset(formData);

  localStorage.removeItem(STORAGE_KEY);
}

function populateFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  const parsedData = JSON.parse(savedData);

  if (savedData) {
    refs.textarea.value = parsedData.message || '';
    refs.email.value = parsedData.email || '';
  }
}

function reset(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) reset(value);
    else delete obj[key];
  }