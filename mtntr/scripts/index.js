function onclickmenu(){
  let iconmenu = document.querySelector('.menu');
  // if(iconmenu.classList)
  iconmenu.classList.toggle("icon");
  document.querySelector('.nav').classList.toggle("change");
  // document.querySelector('.nav_bar').classList.remove()
}

let bagitem;
onload()

function onload(){
    
   let bagitemstr = localStorage.getItem('cart');
bagitem = bagitemstr ? JSON.parse(bagitemstr) : [];
displayitemhomepage();
    add_count();
     
}

function addTobag(itemid){
bagitem.push(itemid);
localStorage.setItem('cart',JSON.stringify(bagitem))
add_count();
}

function add_count(){
  let counting =  document.querySelector('.bag_count');
  if(bagitem.length > 0){
    counting.style.visibility = 'visible';
    counting.innerHTML = bagitem.length;
    
  }
  else{
    counting.style.visibility = 'hidden';
  }
  
//   inner_display()
}

// function inner_display(){
//     if(!innerHtml){
//         return
//     }
//     else{
//         displayitemhomepage();  
//         add_count();
//     }
// }



function displayitemhomepage(){
    
    add_count();
    // inner_display()
let itemsContainerelement = document.querySelector(".items-container");
if(!itemsContainerelement){
    return;
}
let innerHtml ='';
items.forEach(item =>{
innerHtml += `<div class="items-container">
<div class="item-container">
    <img class="item-image" src="${item.image}" alt="image">
    <div class="rating">
    ${item.rating.stars}⭐ | ${item.rating.count}
        
    </div>
    <div class="company-name">
        ${item.company}
    </div>
    <div class="item-name">${item.item_name} </div>
    <div class="price">
        <span class = "current-price">Rs. ${item.current_price}</span>
        <span class = "original-price">Rs. ${item.original_price}</span>
        <span class = "discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addTobag(${item.id})">Add to Bag</button>
</div>
</div>`
})

itemsContainerelement.innerHTML = innerHtml;
}
