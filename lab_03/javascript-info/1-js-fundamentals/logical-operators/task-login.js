let login = prompt('Write here your login' , ''); 
if (login == 'Admin') {
    let pass = prompt('Write your password' , ''); 
    if(pass === 'TheMaster') {
        alert('Welcome'); 
    }else if(pass === '' || pass === null){
        alert('Canceled'); 
    }else{
        alert('Wrong password'); 
    }
} else if(login === '' || login === null){
    alert('Canceled')
} else {
    alert("I don't know you")
}