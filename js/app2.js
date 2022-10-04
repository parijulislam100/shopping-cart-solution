// function updateCaseNumber(isIncreasing){
//     // debugger;
//     const caseInput = document.getElementById("case-input");
//     let caseNumber = caseInput.value;
//     if(isIncreasing){
//         caseNumber = parseInt(caseNumber) + 1;
//     }
//     else if(caseNumber > 0){
//         caseNumber = parseInt(caseNumber) - 1;
//     };
//     caseInput.value = caseNumber;
//     const caseTotal = document.getElementById("case-total");
//     caseTotal.innerText = caseNumber * 59
// }
// document.getElementById("case-plus").addEventListener("click", function(){
//     updateCaseNumber(true);
// });

// document.getElementById("case-minus").addEventListener("click", function(){
//     updateCaseNumber(false);
// })
function updateProductNumber(isIncreasing){
    const caseInput = document.getElementById("case-input");
    const caseNumberText=caseInput.value;
    let caseNumber = parseInt(caseNumberText)
    if(isIncreasing == true){
        caseNumber = caseNumber + 1;
    }
    else if(caseNumber > 0){
        caseNumber = caseNumber - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById("case-total");
    caseTotal.innerText = caseNumber * 59 ;
};
function updateProductNumber(isIncreasing){
    // debugger;
    const phoneInput= document.getElementById("phone-input");
    const phoneNumberText = phoneInput.value;
    let phoneNumber = parseInt(phoneNumberText);
    if(isIncreasing == true){
        phoneNumber = phoneNumber + 1;

    }
    else if(phoneNumber > 0){
        phoneNumber = phoneNumber - 1;
    };
    phoneInput.value = phoneNumber;
    const phoneTotal = document.getElementById("phone-total");
    phoneTotal.innerText = phoneNumber * 1219;
};

function getInputValue(product){
    const productInput = document.getElementById(product + "-input");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
    
}
document.getElementById("case-plus").addEventListener("click",function(){
    updateProductNumber(true);
    calculateTotal()
    
});
document.getElementById("case-minus").addEventListener("click" , function(){
   updateProductNumber(false);
   calculateTotal()
});

document.getElementById("phone-plus").addEventListener("click", function(){
    updateProductNumber(true);
    calculateTotal()
});
document.getElementById("phone-minus").addEventListener("click", function(){
    updateProductNumber(false);
    calculateTotal()
});