let country;
let price;

let nameCountry = prompt('Куда Вам доставить товар?').toLowerCase();
if (nameCountry === null) {
  alert('Отмена ввода!');
}
// eslint-disable-next-line default-case
switch (nameCountry) {
  case 'китай':
    country = 'Китай';
    price = 100;
    break;

  case 'чили':
    country = 'Чили';
    price = 250;
    break;

  case 'австралия':
    country = 'Австралия';
    price = 170;
    break;

  case 'индия':
    country = 'Индия';
    price = 80;
    break;

  case 'ямайка':
    country = 'Ямайка';
    price = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

if (price > 0) {
  alert(`Доставка в ${country} будет стоить ${price} кредитов`);
}
