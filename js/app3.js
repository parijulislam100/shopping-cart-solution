function updatePhoneNumber(isIncreasing){
    const phoneInput = document.getElementById("phone-input");
    let phoneNumber = parseInt(phoneInput.value);
    if(isIncreasing == true){
        phoneNumber =  phoneNumber + 1;
    }
    else if(phoneNumber > 0){
        phoneNumber = phoneNumber - 1;
    }
    phoneInput.value = phoneNumber;
    const phoneTotal = document.getElementById("phone-total");
    phoneTotal.innerText = phoneNumber * 1219;
};
function calculateTotal(){
    const phoneInput = document.getElementById("phone-input");
    const phoneNumber = parseInt(phoneInput.value);
    const phoneTotal = phoneNumber * 1219;
    const caseInput = document.getElementById("case-input");
    const caseNumber = parseInt(caseInput.value);
    const caseTotal = caseNumber * 59;
    const total = phoneTotal + caseTotal;
    const tax = total / 10;
    const totalPrice = total + tax
    document.getElementById("sub-total").innerText = total;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
    
}
// phone increase and decrease events 
document.getElementById("phone-plus").addEventListener("click", function (){
    updatePhoneNumber(true);
    calculateTotal()
    
});
document.getElementById("phone-minus").addEventListener("click", function(){
    updatePhoneNumber(false);
    calculateTotal()
});
// case increase and decrease events 
document.getElementById("case-plus").addEventListener("click", function(){
   const caseInput = document.getElementById("case-input");
   caseNumber = parseInt(caseInput.value);
   caseNumber = caseNumber + 1;
   caseInput.value = caseNumber;
   const caseTotal = document.getElementById("case-total");
   caseTotal.innerText = caseNumber * 59;
   calculateTotal()
});
document.getElementById("case-minus").addEventListener("click", function(){
    const caseInput = document.getElementById("case-input")
    let caseNumber = parseInt(caseInput.value);
    if(caseNumber >0){
        caseNumber = caseNumber - 1;
    }
    
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById("case-total");
    caseTotal.innerText = caseNumber * 59;
    calculateTotal()
})