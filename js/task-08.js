const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {

        console.log('onFormSubmut -> name', name);
        console.log('onFormSubmut -> value', value);
    });
}
