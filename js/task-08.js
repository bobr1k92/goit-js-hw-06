// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     formData.forEach((value, name) => {

//         console.log('onFormSubmut -> name', name);
//         console.log('onFormSubmut -> value', value);
//     });
// }


const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit => {
    onFormSubmit.preventDefault();

  const {
    elements: { email, password },
  } = onFormSubmit.currentTarget;

  const data = new FormData(onFormSubmit.target);

  if (email.value === '' || password.value === '') {
    alert('Error! All fields must be filled in');
  } else {
    let values = {};
    data.forEach((value, key) => {
      values[key] = value;
    });
    console.log(values);
    alert('You are successfully logged in ');
  }
  onFormSubmit.currentTarget.reset();
});