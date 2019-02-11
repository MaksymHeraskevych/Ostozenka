$(document).ready(function(){

	$('.next') .click(function(){
		var currentImage =$ ('.img.house');
		var currentImageIndex =$ ('.img.house') .index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $ ('.img').eq(nextImageIndex);
		currentImage.fadeOut(1000);
		currentImage.removeClass('house')

		if(nextImageIndex == ($('.img:last') .index()+1)){
			$('.img').eq(0).fadeIn(1000);
			$('.img').eq(0).addClass('house');
		} else{
			nextImage.fadeIn(1000);
			nextImage.addClass('house');
		}

	});
	$('.back') .click(function(){
		var currentImage =$ ('.img.house');
		var currentImageIndex =$ ('.img.house') .index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $ ('.img').eq(prevImageIndex);

		currentImage.fadeOut(1000);
		currentImage.removeClass('house');
		prevImage.fadeIn(1000);
		prevImage.addClass('house');
	});
});


$('.window__menu').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay_popup').show();

})
$('.overlay_popup').click(function() {
    $('.overlay_popup, .popup').hide();
    
})

$('.close').click(function() { 
    $('.overlay_popup, .popup').fadeOut();
})



