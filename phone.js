function getUpdatePhoneNumber(isIncrese) {
    const phoneNumberField = document.getElementById('phone-number-field')
    const previousPhoneNumber = phoneNumberField.value;
    const previousPhoneNumberString = parseInt(previousPhoneNumber);
    let newPhone;
    if (isIncrese) {
        newPhone = previousPhoneNumberString + 1;
    }
    else {
        newPhone = previousPhoneNumberString - 1;
    }

    phoneNumberField.value = newPhone;

    return newPhone;
}
function updatePhonePrice(newPhone) {
    const phoneTotal = newPhone * 1219;
    const phonePrice = document.getElementById('phone-total')
    phonePrice.innerText = phoneTotal;
}



document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhone = getUpdatePhoneNumber(true)

    updatePhonePrice(newPhone)
  getSubTotal()
  
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhone = getUpdatePhoneNumber(false)
    updatePhonePrice(newPhone)
   getSubTotal()
})