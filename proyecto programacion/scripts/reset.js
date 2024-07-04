const resetPasswordForm = document.querySelector('#resetPasswordForm');
resetPasswordForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const answer = document.querySelector('#answer').value;

  const newPassword = document.querySelector('#newPassword').value;

  try {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.answer === answer);

    if (user) {
      user.password = newPassword;
      localStorage.setItem('users', JSON.stringify(users));
      alert('Contraseña restablecida con éxito.');
    } else {
      throw new Error('El correo electrónico no está registrado o la respuesta de seguridad es incorrecta');
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
  window.location.href = 'login.html'
});