function Accumulator(startingValue){
    this.value = startingValue; 
    this.read = function() {
        let n = +prompt('num: ', 0);
        this.value += n;  
    }
}

let acc = new Accumulator(1); 
acc.read(); 
acc.read(); 

alert(acc.value); 