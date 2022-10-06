// function updateProductNumber(product,isIncreasing, price){
//     const productInput = document.getElementById(product + "-input");
//     const productText = productInput.value;
//     let productNumber = parseInt(productText);
//     if (isIncreasing == true){
//         productNumber = productNumber + 1;
//     }
//     else if(productNumber > 0){
//         productNumber = productNumber - 1;
//     }
//     productInput.value = productNumber;
//     // update total 
//     const productTotal = document.getElementById(product + "-total");
//     productTotal.innerText = productNumber * price;

// };
// function calculateTotal(){
//     const phoneInput = document.getElementById("phone-input");
//     const phoneNumber = parseInt(phoneInput.value);
//     const phoneTotal = phoneNumber * 1219;
//     const caseInput = document.getElementById("case-input");
//     const caseNumber = parseInt(caseInput.value);
//     const caseTotal = caseNumber * 59;
//     const subTotal = phoneTotal + caseTotal;
//     const tax = subTotal / 100 * 10;
//     const totalPrice = subTotal + tax ;
//     document.getElementById("sub-total").innerText = subTotal;
//     document.getElementById("tax-amount").innerText = tax;
//     document.getElementById("total-price").innerText = totalPrice;


// }
// // phone increase and decrease event 
// document.getElementById("phone-plus").addEventListener("click", function(){
//     updateProductNumber("phone",true, 1219);
//     calculateTotal()
// });
// document.getElementById("phone-minus").addEventListener("click", function(){
//    updateProductNumber("phone", false , 1219) ;
//    calculateTotal()
   
// });
// // case  increase and decrease event 
// document.getElementById("case-plus").addEventListener("click",function(){
//     updateProductNumber("case", true, 59);
//     calculateTotal()
// });
// document.getElementById("case-minus").addEventListener("click", function (){
//     updateProductNumber("case", false , 59);
//     calculateTotal()
    
// });


//----------- self practice-----------
function updateProductNumber(product,isIncreasing,price){
    const phoneInput = document.getElementById(product + "-input");
    const phoneInputText = phoneInput.value;
    let phoneNumber = parseInt(phoneInputText);
    if(isIncreasing == true){
        phoneNumber = phoneNumber + 1;
    }
    else if(phoneNumber > 0){
        phoneNumber = phoneNumber - 1;
    }
    phoneInput.value = phoneNumber;
    // debugger;
    const phoneTotal = document.getElementById(product + "-total");
    phoneTotal.innerText = phoneNumber * price;
    
};
function calculateTotal(){
    // debugger;
    const phoneInput = document.getElementById("phone-input").value ;
    const phoneNumber = parseInt(phoneInput);
    const phoneAmount = phoneNumber * 1219;
    const caseInput = document.getElementById("case-input").value ;
    const caseNumber = parseInt(caseInput)
    const caseAmount = caseNumber * 59;
    const totalProduct = phoneAmount + caseAmount;
    const tax = totalProduct / 10;
    const total = totalProduct +  tax;
    document.getElementById("sub-total").innerText = totalProduct;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = total;


}
document.getElementById("phone-plus").addEventListener("click" ,function(){
    updateProductNumber("phone", true, 1219);
    calculateTotal();
});
document.getElementById("phone-minus").addEventListener("click", function(){
   updateProductNumber("phone", false, 1219);
   calculateTotal();
});
document.getElementById("case-plus").addEventListener("click" ,function(){
    updateProductNumber("case", true, 59);
    calculateTotal();
});
document.getElementById("case-minus").addEventListener("click", function(){
    updateProductNumber("case", false , 59);
    calculateTotal();
});
