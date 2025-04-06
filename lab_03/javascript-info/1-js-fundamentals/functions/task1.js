/*

В противном случае он запрашивает подтверждение и возвращает свой результат:

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}
Будет ли функция работать по-другому, если else будет удалена?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm('Did parents allow you?');
}
Есть ли какая-то разница в поведении этих двух вариантов?

*/

//ans : no difference . 
