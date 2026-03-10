let total = 0;

function addProduct(name,image,price){

total = total + price;

document.getElementById("cart").innerHTML +=
`
<div class="cart-item">
<img src="${image}">
<h4>${name}</h4>
<p>₹${price}</p>
</div>
`;

document.getElementById("total").innerText = total;

}
function placeOrder(){

if(total === 0){
alert("Cart is empty");
return;
}

alert("Order Placed Successfully 🎉");

document.getElementById("cart").innerHTML = "";
total = 0;
document.getElementById("total").innerText = total;

}