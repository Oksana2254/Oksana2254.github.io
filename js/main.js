$(function() {
	

	// Создание слайдера - owl-assortment
	var owlAssortment = $('.owl-assortment');

	// Инициализация слайдера
	owlAssortment.owlCarousel({
	    loop:true,
	    margin:10,
	    dots: false,
	    nav: true,
	    navText: false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        600:{
	            items:2,
	        },
	        1000:{
	            items:4,
	        }
	    }
	});

	// нажатие на кнопку НАЗАД в слайдере Ассортимент
	$('.assortment .btn-prev').click(function() {
	    owlAssortment.trigger('prev.owl.carousel');
	});

	// нажатие на кнопку ДАЛЕЕ в слайдере Ассортимент
	$('.assortment .btn-next').click(function() {
	    owlAssortment.trigger('next.owl.carousel');
	});

});
$(function(){
    $('.nav').slicknav();
});