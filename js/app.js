var main_nav_template = MyApp.templates.main_nav_template,
	side_menu_template = MyApp.templates.side_menu_template,
	modal_search_template = MyApp.templates.modal_search_template,
	home_template = MyApp.templates.home_template,
	products_template = MyApp.templates.products_template,
	product_details_template = MyApp.templates.product_details_template;
var currentCategory = products.category[0],
	currentCategoryItem = currentCategory.items[0],
	allCategories = products.category,
	currentItem;



function showTemplate(template, data, target){
	var html = template(data);
	$(target).html(html);
}

function findCategoryItem(currentCategoryItem){
	for (var i = 0; i < allCategories.length; i++){
		if(allCategories[i].name == currentCategoryItem) {
			return allCategories[i];
		}
	} 
}

function showItem(){
	var index = $(this).data('id');
	var currentCategoryItem = $(this).data('parent');
	currentCategory = findCategoryItem(currentCategoryItem);
	currentItem = currentCategory.items[index];
	showTemplate(product_details_template, currentItem, '#placeholder');
	$("#photo-zoom").elevateZoom({
		  zoomType: "inner",
		  responsive : true,
		  cursor: "crosshair",
		  zoomWindowFadeIn: 500,
		  zoomWindowFadeOut: 750
	});
	$('#btn-return').click(function(){
		$('.zoomContainer').css('display', 'none');
		showTemplate(products_template, products, '#placeholder');
		$('.product').click(showItem);
	});

}

/* need to fix category filter

function showCategory(){
	$('.js-category-switch').click(function(e){
		e.preventDefault();
		var chosenCategory = $(this).data('category');
		console.log(chosenCategory + ' show');
		var activeCategory = allCategories.find(function(cat){
			return cat.name == chosenCategory;
		});
		var activeIndex = allCategories.indexOf(activeCategory);
		showTemplate(products_template, xxxx , '#placeholder');
	});
}

*/


(function(){
	
	renderPage();

	function renderPage() {
		/* templates */
		$('#main-nav').html(main_nav_template);
		$('#side-menu').html(side_menu_template);
	
		$('#search').html(modal_search_template);
	}

		
	$('.js-startUp').click(function(){
		$('.zoomContainer').css('display', 'none');
		$('#placeholder').html(home_template);
		$("#carousel").owlCarousel({
	        singleItem: true,
	        pagination: true,
	        navigation: false,
	        autoPlay: 5000
	    });
	    
	
		$('#btn-more').click(function(){
			
			showTemplate(products_template, products, '#placeholder');
			$('.product').click(showItem);
		});
	});

	/* other */
	$('.nav-toggle').click(function(){
		$('.nav-toggle').toggleClass('nav-active');
		$('.side-menu').toggleClass('side-active');
	});

	$('#search-modal').click(function(e){
		e.preventDefault();
		$('#modal-search').toggleClass('active');
	});

	$('#btn-close-form').click(function(){
		$('#modal-search').removeClass('active');
	});

	$('.product-like').click(function(){
		console.log('click');
		var current = parseInt($(this).find('#like-counter').text(), 10);
	    if($('#like-counter').hasClass('active')) {
	    	current++;
	    } else {
	    	current--; 
	    }
	    $('#like-counter').html(current).toggleClass('active');
	});

	/* load home */
	$('.js-startUp').click();
	
})();


