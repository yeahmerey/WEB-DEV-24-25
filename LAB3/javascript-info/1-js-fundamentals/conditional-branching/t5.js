/*Перепишите if..else с использованием нескольких троичных операторов '?'.

Для удобства чтения рекомендуется разбить код на несколько строк.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}*/

let message = (login == 'Employee') ? 'Hello' : 
              (login == 'Director') ? 'Greetings' : 
              (login == '') ? 'No login' : ''; 