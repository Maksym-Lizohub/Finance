const formRef = document.querySelector('.js-form');
const warnRef = document.querySelector('.js-warning');

formRef.addEventListener('submit', onValidation);


function onValidation(event) {
  const { name, email } = event.currentTarget.elements;
  event.preventDefault();

  if (email.value === '' || name.value === '') {
    warnRef.classList.add('active');
  } else {
    if (warnRef.classList === 'active') {
      warnRef.classList.remove('active');
    }
    let objValue = {
      [email.name]: email.value,
      [name.name]: name.value,
    };
    console.log(objValue);
    formRef.reset();
  }
}
