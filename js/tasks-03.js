const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const password = prompt('Введите ваш пароль!');

if (password === null || password == '') {
  const cancel = 'Отменено пользователем!';
  alert(cancel);
} else if (password != ADMIN_PASSWORD) {
  const noPass = 'Доступ запрещен, неверный пароль!';
  alert(noPass);
} else {
  const welcome = 'Добро пожаловать!';
  alert(welcome);
}
