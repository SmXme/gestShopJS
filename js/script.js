// 				GLOBAL VARIABLES				  //

myProducts=[];
myBrands=[];



// 				CLASSES				  //
function Products (productName,productPrice,productQty){
	this.name= theName;
	this.price = thePrice;
	this.qty = theQty;
}

function Brands(brandName){
	this.name = brandName;
	this.brandProducts = []; 
}





// 				EVENTLISTENERS				  //
$('#inputAddProduct').click(addProduct);
$('#inputAddBrand').click(addBrand);




// 				FUNCTIONS				  //
function addProduct(){
	myProducts.push(new Products($('#inputProductName').val(),$('#inputProductPrice').val(),$('#inputProductQty').val()));
	showProductList();
}

function showProductList(){
	$('#productsList').html("");
	for (var i = 0 ; i < myProducts.length ; i++) {
		$('#productsList').append('<li class="productLine">'+myProducts[i].name+'</li>');
	}
}

function addBrand(){
	myBrands.push(new Brands($('#inputBrandName').val()));
	console.log(myBrands);
	showBrandList();
}

function showBrandList(){
	$('#brandsList').html("");
	for (var i = 0 ; i < myBrands.length ; i++) {
		$('#brandsList').append('<li class="brandLine">'+myBrands[i].name+'</li>');
	}
}
