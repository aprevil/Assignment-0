function titleCaseEdit(title) {
  
  let str = Array.from(title);
  
  for(let i = 0; i<str.length;i++){
    if(i == 0)str[i] = str[i].toUpperCase();
    
    if(str[i]==' ')str[i+1] = str[i+1].toUpperCase();
  }
  
  return str.join("");
}

// Do not edit this line;
module.exports = titleCaseEdit;