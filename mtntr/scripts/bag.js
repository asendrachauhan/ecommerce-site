function onclickmenu(){
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}


const convience_fee = 99;
let bag_item_object;
onload();
function onload(){
  load_bag_items();

display_bag_items();
displaybagsummary();

}

function displaybagsummary(){
  let bagsummaryelrment = document.querySelector('.bag-summary')
let totalitems = bag_item_object.length;
let totalmrp = 0;
let totaldiscount = 0;


bag_item_object.forEach(bagitem =>{
  totalmrp = bagitem.original_price;
  totaldiscount = bagitem.original_price - bagitem.current_price;

});
let finalpayment = totalmrp - totaldiscount + convience_fee;

  bagsummaryelrment.innerHTML = `<div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${totalitems}Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">₹${totalmrp}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-₹${totaldiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">₹ 99</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">₹ ${finalpayment}</span>
  </div>
</div>
<button class="btn-place-order">
  <div class="css-xjhrni">PLACE ORDER</div>
</button>
`
}

function load_bag_items(){
   bag_item_object = bagitem.map(itemid => {
    for(let i = 0;i<items.length;i++){
      if(itemid == items[i].id){
        return items[i];
      }
    }
  });
  
}



function display_bag_items(){
let container_element = document.querySelector('.bag-page');

let innerHTML = '';
bag_item_object.forEach(bagitem => {
  innerHTML += genrate_item_html(bagitem);
});

container_element.innerHTML = innerHTML;
}
function removefrombag(itemid){
  bagitem = bagitem.filter(bagitemid => bagitemid != itemid);
  localStorage.setItem('cart',JSON.stringify(bagitem));
  load_bag_items();
  add_count()
  display_bag_items();
  displaybagsummary()
}

function genrate_item_html(item) {
 return `<div class="bag-page">
<div class="bag-items-container">
  <div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs 999</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick ="removefrombag(${item.id})">X</div>
  </div>

</div>
<div class="bag-summary">
  <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (2 Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">Rs1284</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-Rs143</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs 99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">Rs 1240</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
</div>

</div>`
}
