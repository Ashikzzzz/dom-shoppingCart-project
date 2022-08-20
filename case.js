// case-plus-button 

function getUpdateNumber(isIncrese){
const caseNumberField =document.getElementById('case-number-field');
const casePreviousValue = caseNumberField.value ;
const casePreviousValueString= parseInt(casePreviousValue)
let newCase;
if(isIncrese){
 newCase =casePreviousValueString+1;
}
else {
     newCase= casePreviousValueString-1;
}

caseNumberField.value= newCase;
return newCase;
}

function casePriceNumber (newCase){
  const caseTotalPrice= newCase*59;
  const caseInner = document.getElementById('case-total')
  caseInner.innerText=caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
 const newCase= getUpdateNumber(true);
casePriceNumber(newCase)
getSubTotal()
})

// case-minus-button 

document.getElementById('btn-case-minus').addEventListener('click',function(){
 const newCase= getUpdateNumber(false);
casePriceNumber(newCase)
getSubTotal() 
})