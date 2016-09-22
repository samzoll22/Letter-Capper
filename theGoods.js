function LetterCapitalize(str) { 

var capper = str.split(" ");

for (var i = 0; i < capper.length; i++){
    capper[i] = capper[i].substr(0,1).toUpperCase() + capper[i].substr(1);
}
  return capper.join(" "); 
         
}

LetterCapitalize("Argument goes here");
