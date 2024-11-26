/*const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const goToRegister = document.getElementById('goToRegister');
const goToLogin = document.getElementById('goToLogin');

goToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.remove('active');
    registerForm.classList.add('active');
});

goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.classList.remove('active');
    loginForm.classList.add('active');
});

if (!loginForm || !registerForm || !goToRegister || !goToLogin) {
    console.error('Um ou mais elementos não foram encontrados no DOM.');
}

if (loginForm && registerForm) {
    goToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });
} else {
    console.error('Formulários de login ou registro não encontrados.');
}
*/

function toggleForms(toShow, toHide) {
    if (toShow && toHide) {
        toHide.classList.remove('active');
        toShow.classList.add('active');
    } else {
        console.error('Elementos não encontrados para alternância.');
    }
}

if (loginForm && registerForm && goToRegister && goToLogin) {
    goToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForms(registerForm, loginForm);
    });

    goToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        toggleForms(loginForm, registerForm);
    });
} else {
    console.error('Um ou mais elementos necessários não foram encontrados no DOM.');
}
