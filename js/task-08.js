const formEl = document.querySelector("form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Будь ласка заповніть всі поля");
  }
  const formData = {
    [email.name]: email.value,
    [password.name]: password.value,
  };

  console.log(formData);

  event.target.reset();
}
