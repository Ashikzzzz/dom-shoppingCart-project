function getElementTotalId(elementId){
    const phoneTotalElement = document.getElementById(elementId)
    const previousPhoneString= phoneTotalElement. innerText;
    const currentPhoneTotal= parseInt(previousPhoneString)
    return currentPhoneTotal;
}

function getSubTotal(){
    const phoneTotalById=getElementTotalId('phone-total')
    const caseTotalById=getElementTotalId('case-total')
    
    const subTotal=phoneTotalById+caseTotalById;
    const previousSubTotal= document.getElementById('sub-total')
    previousSubTotal.innerText=subTotal;
    const tax= subTotal*0.1;
    const taxId= document.getElementById('tax-amount')
    taxId.innerText=parseFloat(tax.toFixed(2));

    const finalTotal = subTotal+tax;
    const finalTotalLast= document.getElementById('final-total')
    finalTotalLast.innerText=finalTotal;
}

