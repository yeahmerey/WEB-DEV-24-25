/*

Замените функциональные выражения функциями со стрелками в приведенном ниже коде:

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

*/

let ask = (questions , yes , no) => {
    if(confirm(questions)) yes(); 
    else no(); 
}
ask('Do you agree?' , () => alert("You agreed") , () => alert("You canceled the execution")); 