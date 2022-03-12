let form = document.querySelector('.form');
let nameInput = form.querySelector('#name');
let phoneInput = form.querySelector('#phone');
let mailInput = form.querySelector('#mail');

let isStorageSupport = true;
let storage = {};

try {
  storage = JSON.parse(localStorage.getItem('storage'));
} catch (err) {
  isStorageSupport = false;
}

document.addEventListener('DOMContentLoaded', function () {
  if (storage) {
    nameInput.value = storage.name;
    phoneInput.value = storage.phone;
    mailInput.value = storage.mail;
  }
});

form.addEventListener('submit', function () {
  if (isStorageSupport) {
    storage = {
      name: nameInput.value,
      phone: phoneInput.value,
      mail: mailInput.value,
    };
    localStorage.setItem('storage', JSON.stringify(storage));
  }
});
