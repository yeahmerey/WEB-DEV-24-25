let salaries = {
    John : 100 , 
    Ann : 160 ,
    Pete : 130
}
let sum =0  ;
function sum(obj){
    for(let key in obj){
        sum += salaries[key] ;
    }
}
alert(sum) ;