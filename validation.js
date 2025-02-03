const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#cpassword');

form.addEventListener('submit', (e) => {
    e.preventDefault();  
    if (validateInputs()) {
        form.submit(); 
    }
});

function validateInputs() {
    let isValid = true;

    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = confirmpassword.value.trim();

    if (usernameVal === '') {
        setError(username, 'Username is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (emailVal === '') {
        setError(email, 'Email is required');
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordVal === '') {
        setError(password, 'Password is required');
        isValid = false;
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (cpasswordVal === '') {
        setError(confirmpassword, 'Confirm password is required');
        isValid = false;
    } else if (cpasswordVal !== passwordVal) {
        setError(confirmpassword, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccess(confirmpassword);
    }

    return isValid; 
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error');
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
