const credits = 23580;
let pricePerDroid = 3000;
const inputDroid = prompt('Сколько дроидов вы ходите купить?');
let totalPrice;

if (inputDroid === null || inputDroid == '') {
  alert('Отменено пользователем!');
} else if (Number.isNaN(Number.parseInt(inputDroid))) {
  alert('Ошибка ввода, повторите!');
} else {
  totalPrice = pricePerDroid * inputDroid;
}
alert(
  (totalPrice =
    totalPrice > credits
      ? 'Недостаточно средств на счету!'
      : `Вы купили ${totalPrice} дроидов, на счету осталось ${credits -
          totalPrice} кредитов`),
);
