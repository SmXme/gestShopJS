// 				GLOBAL VARIABLES				  //

myBrands=[];
selectedBrand ="";
index = -1;

// 				CLASSES				  //
function Products (productName,productPrice,productQty){
	this.name= productName;
	this.price = productPrice;
	this.qty = productQty;
}

function Brands(brandName){
	this.name = brandName;
	this.brandProducts = []; 
}


// 				EVENTLISTENERS				  //
$('#inputAddProduct').click(addProduct);
$('#inputAddBrand').click(addBrand);
function init(){
	$('.brandLine').click(selectBrand);
	$('.inputDeleteBrand').click(removeBrand);
}


// 				FUNCTIONS				  //

function removeBrand(){
	toDelete = $(this).parent().text(); 
	for (var i = 0 ; i < myBrands.length ; i++){
		if (myBrands[i].name == toDelete){
			myBrands.splice(i, 1);
		}
	}
	$(this).parent().remove();
}
function addProduct(){
	if ($('#inputProductName').val() != '' && $('#inputProductPrice').val() != '' && $('#inputProductQty').val() != ''){
		myBrands[index].brandProducts.push(new Products($('#inputProductName').val(),$('#inputProductPrice').val(),$('#inputProductQty').val()));
		showProductList();
		$('#inputProductName').val("");
		$('#inputProductPrice').val("");
		$('#inputProductQty').val("");
	}
}

function showProductList(){
	$('#productInfo').fadeIn();
	$('#productsList').html("");
	for (var i = 0 ; i < myBrands[index].brandProducts.length ; i++) {
		$('#productsList').append('<li class="productLine">'+myBrands[index].brandProducts[i].name+'</li>');
	}
}

function addBrand(){
	if ($('#inputBrandName').val() != ""){
		myBrands.push(new Brands($('#inputBrandName').val()));
		$('#inputBrandName').val('');
		$('#inputBrandName').focus();
		showBrandList();
	}
}

function showBrandList(){
	$('#brandsList').html("");
	for (var i = 0 ; i < myBrands.length ; i++) {
		$('#brandsList').append('<li class="brandLine">'+myBrands[i].name+'<input class="btn btn-sm inputDeleteBrand" type="button" value="Supprimer"></li>');
	}
	init();
}

function selectBrand(){

	$('#titleProductName').html(  $(this).text()  );
	selectedBrand = $(this).text();
	for(var k = 0 ; k < myBrands.length ; k++){
		if (myBrands[k].name == selectedBrand) index = k;
	}
	showProductList();
}