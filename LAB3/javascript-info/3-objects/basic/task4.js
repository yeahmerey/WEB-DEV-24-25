// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

function multiplyNumeric(obj){
    for(let key in obj) {
        if(typeof(obh[key]) == Number){
            menu[key] *= 2; 
        }
    }
}