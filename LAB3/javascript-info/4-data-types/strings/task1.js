function ucFirst(a) {
    if(!a) return a ;
    return a[0].toUpperCase() + a.slice(1);     
}

alert(ucFirst('merey')); 