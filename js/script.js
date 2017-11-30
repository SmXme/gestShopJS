myProducts=[];

function Products (theName,thePrice,theQty){
	this.name= theName;
	this.price = thePrice;
	this.qty = theQty;
}

$('#inputAddProduct').click(addProduct);

function addProduct(){
	myProducts.push(new Products($('#inputProductName').val(),$('#inputProductPrice').val(),$('#inputProductQty').val()));
	showProductList();
}

function showProductList(){
	$('#productsList').html("");
	for (var i = 0 ; i < myProducts.length ; i++) {
		$('#productsList').append('<li class="productLine">'+myProducts[i].name+'</li>');
		console.log(myProducts[i]);
	}
	console.log(myProducts);
}