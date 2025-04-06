/*
Здесь функция makeUser возвращает объект.

Каков результат доступа к its ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
*/

//Answer is : ERROR!
