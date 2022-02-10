function finalPrice (price, discount){
    const priceWithDiscount = (price * (100 - discount)/100); 
    return(priceWithDiscount)
}

function calculatePriceFinal() {
    const inputPrice = document.getElementById("PriceInitial");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById ("totalDiscount");
    const discountValue = inputDiscount.value; 

    const priceToPay = finalPrice (priceValue, discountValue)

    const resultText = document.getElementById("result"); 
    resultText.innerText = "the price is $" + priceToPay; 
    
}    