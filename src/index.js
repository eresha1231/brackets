module.exports = function check(str, bracketsArr) {
  while(str !== '') {    
    let flag = false;
    bracketsArr.forEach(element => { 
      let brackets = element[0] + element[1]; 
        if (str.includes(brackets)){ 
            str = str.replace(brackets, ''); 
            flag = true;
        }
    });
    if (flag === false) break;
  }
  return (str === '') ? true  : false;
}

