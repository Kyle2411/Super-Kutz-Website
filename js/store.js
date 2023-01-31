var categories = [];
var catalog = [];
var cart = [];
let total = 0;

var imageFolder = "myImages/"; 

$(window).on("load", function() {

    setUpCart();
});

/**
 * Function which initializes 8 categories that a Shoe object can possess.
 */
function initializeCategories(){

    
    var hair = new Category(1000, "Haircuts", "Our haircuts that we offer");
    categories.push(hair);

    var beard = new Category(2000, "Beards", "Our beardcuts that we offer");
    categories.push(beard);

    var shampoo = new Category(3000, "Shampoo", "The shampoos that we offer");
    categories.push(shampoo);
      
    var conditioner = new Category(4000, "Conditioner", "The conditioners that we offer");
    categories.push(conditioner);
    
    var clippers = new Category(5000, "CLippers", "The clippers that we offer");
    categories.push(clippers);


     
}

/**
 * Returns the category which matches the specified id.
 * @param {*} categoryId Id used to find category.
 */
function getCategory(cata){
     

    for (let i = 0; i < categories.length; i++) 
    {
        
        const item = categories[i];
        if (item.categoryId == cata) 
        {
            return item.categoryName;
        }
    }
    return undefined;
}

/**
 * Creates 3 Shoe objects for each category class (24 Shoe objects in total).
 */
function initializeItems()
{
    
    var hair1 = new hairProducts(10, "High Top", "rectangle shape with taper fade", 20.99, "myImages/HighTop.jpg", 5, 1000);
    catalog.push(hair1);
    var hair2 = new hairProducts(11, "Waves", "Wave like hair pattern with taper fade", 14.99, "myImages/waves.jpg", 10, 1000);
    catalog.push(hair2);
    var hair3 = new hairProducts(12, "Afro", "Natural blowout hair", 8.99, "myImages/afro.jpg", 25, 1000);
    catalog.push(hair3);

    var beard1= new hairProducts(20, "Moustachee", "facial hair over lip", 4.99, "myImages/Moustache.jpg", 20, 2000);
    catalog.push(beard1);
    var beard2 = new hairProducts(21, "Chin Strap", "facial hair only around jaw line and chin", 12.99, "myImages/ChinStrap.png", 15, 2000);
    catalog.push(beard2);
    var beard3 = new hairProducts(22, "Full Beard", "Full beard with only shape up", 4.99, "myImages/Beard.jpg", 13, 2000);
    catalog.push(beard3);


    var shampoo1= new hairProducts(30, "Paul Mitchell Tea Tree Special Shampoo", "Eliviates dandruff", 20.99, "myImages/shampoo1.png", 4, 3000);
    catalog.push(shampoo1);
    var shampoo2 = new hairProducts(31, "Dove Men+Care 2 in 1 Shampoo", "All in one for complete wash", 9.99, "myImages/shampoo2.png", 10, 3000);
    catalog.push(shampoo2);
    var shampoo3 = new hairProducts(32, "Head & Shoulders Itchy Scalp Care Daily Shampoo", "Daily cleanse made for every day use", 6.99, "myImages/shampoo3.png", 30, 3000);
    catalog.push(shampoo3);

    var conditioner1= new hairProducts(40, "Densifique Fondant Densité Conditioner", "Volumanizes hair texture",  42.99, "myImages/shampoo4.png", 14, 4000);
    catalog.push(conditioner1);
    var conditioner2 = new hairProducts(41, "Nourishing Hair & Scalp Conditioner", "leaves scalp fesh and moist", 24.99, "myImages/shampoo5.png", 34,  4000);
    catalog.push(conditioner2);
    var conditioner3 = new hairProducts(42, "Daily Moisturizing Conditioner", "Nourishes vitamins in hair follicles", 17.99, "myImages/shampoo6.png", 5, 4000);
    catalog.push(conditioner3);

    var clippers1= new hairProducts(50, "Master Cordless Hair Clipperd", "cordless made simple", 89.99, "myImages/clipper1.png", 10, 5000);
    catalog.push(clippers1);
    var clippers2 = new hairProducts(51, "23885 Slim Line 2 Hair Clippers", "Slim clipper shape for better handle", 52.99, "myImages/clipper2.png", 24, 5000);
    catalog.push(clippers2);
    var clippers3 = new hairProducts(53, "ER-SB40-K Cordless Hair Trimmer", "trims hair with extreme accuracy",  111.99, "myImages/clipper3.png", 5, 5000);
    catalog.push(clippers3);

}




/**
 * Sets up the webpage for the user.
 */
function setUpCart(){

    initializeCategories();
    initializeItems();
    showListOfItems();
    hideStatusMessage();
    makeAjaxCall();
    
}

/**
 * Displays an alert based on user interaction.
 * @param {*} cssClass Class used to change styling of alert.
 * @param {*} messageToDisplay Message to display in the alert.
 */
var timeoutForMsg;
function showStatusMessage(messageToDisplay){
     
    if(timeoutForMsg){

        clearTimeout(timeoutForMsg);
    }
    let alert = document.getElementById("divAlert");
    $(".alert").show();
    alert.innerHTML = messageToDisplay;
    window.scroll(0,0);
    timeoutForMsg = setTimeout(hideStatusMessage, 5000);

}

/**
 * Hides the status alert.
 */
function hideStatusMessage(){
     
$(".alert").hide();
timeoutForMsg = undefined;
}

/**
 * Clears the div element which contains shoe information.
 */
function clearMainContainer(){
     
    let mainContainer = document.getElementById("divMainContainer");
    mainContainer.innerHTML = "";
}

/**
 * Displays all shoes in the catalog using bootstrap cards.
 */
function showListOfItems(){

    
    clearMainContainer();
    let mainContainer = document.getElementById("divMainContainer");
    let content = `<div class="container">`;
    content += `<div class="row rowShift">`;
    for (let i = 0; i < catalog.length; i++){
        const item = catalog[i];
        const addRow = i % 3 == 0;
        if (addRow && i > 0){ 
            content += `</div> <div class="row rowShift">`;            
        }
        content += `
        <div class="card text-white text-center bg-dark mb-3" style="width: 18rem; margin-right: 1.6%">
            <div class="card-header">${getCategory(item.category)}</div>
            <div class="card-body">
                <img src="${item.image}" class="card-img-top" alt="..." style="width: 14rem; height: 200px; border-radius: 8pt">
                <h5 class="card-title"><br>${item.title}</h5>
                <p class="card-text">Quantity : ${item.quantity}</p>
                <p class="card-text">$${item.price}</p>
                <button type="button" class="btn btn-secondary" onclick="addToCart(${item.id},${item.price})">Add To Cart <i class="fa fa-cart-plus"></i></button>
                <button type="button" class="btn btn-primary"  onclick ="showItemDetails(${item.id})" data-toggle="modal" data-target="#exampleModalCenter">Details <i class="fa fa-info"></i>
            </div>
        </div>
        `;
            
    }
    content += "</div> </div>";
    mainContainer.innerHTML += content;
}

/**
 * Displays all shoes found in the user's cart in a bootstrap table.
 */
function viewCart(){
    
    clearMainContainer();
    let mainContainer = document.getElementById("divMainContainer");
    let hairTable = '<table class="table table-striped tableAlignText"><thead><tr class="trTitle"><th colspan=9>Cart Details</th></tr> <tr><th>ID</th><th>Name</th><th>Description</th><th>Price</th><th>Quantity</th><th>Display</th><th></th><th></th></tr></thead><tbody> ';

    cart.forEach(hair => {
        hairTable += `<tr> <td>${hair.id}</td> <td>${hair.title}</td> <td>${hair.description}</td> <td>$${hair.price}</td><td>${hair.quantity}</td> <td><img src="${hair.image}" width="75" height="75" class="img-thumbnail"/></td> <td><button type="button" class="btn btn-danger" onclick="removeFromCart(${hair.id}, ${hair.price})">Remove Item <i class="fa fa-minus"></i></button></td> <td><button type="button" class="btn btn-primary"  onclick ="showItemDetails(${hair.id})" data-toggle="modal" data-target="#exampleModalCenter">Details <i class="fa fa-info"></i></td></tr>`;
    });
    hairTable += `</tbody></table><div class="cart-total"><strong class="cart-total-title">Total</strong> <span class="cart-total-price">$${total}</span></div>`;

    mainContainer.innerHTML = hairTable;;
}


/**
 * Finds an item in catalog based on id.
 * @param {*} itemId Id used to search for item.
 */
function findItemById(itemId){

    for(let i = 0; i < catalog.length; i++)
    {
	    let equip = catalog[i];
	    if(equip.id == itemId)
	    {
	        return equip;
	    }
    }
    return undefined;
}



/**
 * Displays the details of an item.
 * @param {*} itemId Id used to find item to be detailed.
 */

 function showItemDetails(itemId){


    let result = findItemById(itemId);
    let mainContainer = document.getElementById("divMainContainer");
    let hairTable = `
    
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-keyboard="false" data-backdrop="static">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Item Details</h5>
          <button type="button" class="close" onclick = "resetModal()"" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <div class="card text-white text-center bg-dark mb-3" style="width: 27rem; margin-right: 1.6%">
            <div class="card-header">${getCategory(result.category)}</div>
            <div class="card-body">
                <img src="${result.image}" class="card-img-top" alt="..." style="width: 15rem; height: 210px; border-radius: 8pt">
                <h5 class="card-title"><br>${result.title}</h5>
                <p class="card-text">${result.description}</p>
                <p class="card-text">Quantity : ${result.quantity}</p>
                <p class="card-text">$${result.price}</p>
                <button type="button" class="btn btn-secondary" onclick="addToCart(${result.id})">Add To Cart <i class="fa fa-cart-plus"></i></button>
            
            </div>
        </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick = "resetModal()">Close</button>
        </div>
      </div>
    </div>
  </div>`;

     mainContainer.innerHTML += hairTable;

   
}

function resetModal(){

    $('.modal-backdrop').hide();
    showListOfItems();
}

/**
 * Adds an item from the catalog to the user's cart.
 * @param {*} itemId Id to find item in catalog.
 */
function addToCart(itemId, price){
     
    var equip = findItemById(itemId);
    if(equip.quantity == 0)
    {
        showStatusMessage("The Item that you have selected is currently unavailibe");
    }
    else
    {
        equip.quantity--;
        cart.push(equip);
        total += price;
        total = parseFloat(total.toFixed(4));
        showStatusMessage("The Item that you have selected has been added to your cart");
        showListOfItems();
    }
}



/**
 * Removes an item from the user's cart.
 * @param {*} itemId Id to find item in cart.
 */
function removeFromCart(itemId, price){
    
    var equip = findItemById(itemId);
    
    cart.splice(cart.indexOf(equip), 1)
    total -= price;
    total = parseFloat(total.toFixed(4));
    viewCart();
    showStatusMessage("The Item that you have selected has been removed from your cart");
}

/**
 * Displays a specified array as a boostrap table.
 * @param {*} array Array to display as a table.
 */
function viewArrayAsTable(search, type){

    var array = [];

    if(type == "category"){
        
        for(let i = 0; categories.length > i; i++){
        if(search == categories[i].categoryName){
            for(let y = 0; catalog.length > y; y++){
                if(categories[i].categoryId == catalog[y].category){
                    array.push(catalog[y]);
   
            
                }

        }
    }
        }
    }

    if(type == "title"){
    for(let i = 0; catalog.length > i; i++){
        if(search == catalog[i].title){
                    array.push(catalog[i]);
                    
                    break;
                }
        }
    }

    
    clearMainContainer();
    let mainContainer = document.getElementById("divMainContainer");
    let hairTable = '<table class="table table-striped tableAlignText"><thead><tr class="trTitle"><th colspan=9>Cart Details</th></tr> <tr><th>ID</th><th>Name</th><th>Description</th><th>Price</th><th>Quantity</th><th>Display</th><th></th><th></th></tr></thead><tbody>';

    array.forEach(hair => {
        hairTable += `<tr> <td>${hair.id}</td> <td>${hair.title}</td> <td>${hair.description}</td> <td>$${hair.price}</td> <td>${hair.quantity}</td><td><img src="${hair.image}" width="75" height="75" class="img-thumbnail"/></td> <td><button type="button" class="btn btn-secondary" onclick="addToCart(${hair.id})">Add To Cart <i class="fa fa-cart-plus"></i></button></td> <td><button type="button" class="btn btn-primary"  onclick ="showItemDetails(${hair.id})" data-toggle="modal" data-target="#exampleModalCenter">Details <i class="fa fa-info"></i></td></tr>`;
    });

    hairTable += "</tbody></table>";

    mainContainer.innerHTML = hairTable;;
}

function findHairWithProperty(search, type){

    if(type == "category"){

    for(let i = 0; categories.length > i; i++){
    if(search == categories[i].categoryName){

        return 0;

    }
}
    }

if(type == "title"){

    for(let i = 0; catalog.length > i; i++){

        if(search == catalog[i].title){

            return 1;
    
        }

    }
}
return 2;
}

/**
 * Seaches for an item based on what the user typed.
 */
function searchByKeyword(){
   
    let searchBar = document.getElementById("carSearchBar");
    const keyword = searchBar.value;
    if (keyword){


        if (findHairWithProperty(keyword, "category") == 0){
            viewArrayAsTable(keyword, "category");
            searchBar.value = "";
        }
        if (findHairWithProperty(keyword, "title") == 1){
            
            viewArrayAsTable(keyword, "title");
            searchBar.value = "";
        }
    

        if (findHairWithProperty(keyword, "category") == 2  && (findHairWithProperty(keyword, "title") == 2)){

        showStatusMessage("No item Found");
    }
    }
    
}

