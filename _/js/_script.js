$(function(){

	if($('#map-contact').length>0){
    map = new GMaps({
			div: '#map-contact',
			lat: 19.3804237,
      lng: -99.0755493,
      zoom: 16
		});
		map.addMarker({
			lat: 19.3804237, lng: -99.0755493, details: 'Nuestras oficinas',
			infoWindow: { content: '<img width="140px" src="_/img/productos-comerciales-mexico.png">' }
		});
  }


	$('.proceso').slick({vertical:true});
	$('.proceso-cre').click(function(e){
		e.preventDefault();
		$('.proceso').slick('slickGoTo', 0);
		$('.pro-active').removeClass('pro-active');
		$(this).addClass('pro-active');
	});
	$('.proceso-pre').click(function(e){
		e.preventDefault();
		$('.pro-active').removeClass('pro-active');
		$(this).addClass('pro-active');
		$('.proceso').slick('slickGoTo', 1);
	});
	$('.proceso-tec').click(function(e){
		e.preventDefault();
		$('.pro-active').removeClass('pro-active');
		$(this).addClass('pro-active');
		$('.proceso').slick('slickGoTo', 2);
	});



	$('.gen-slider').slick({
		respondTo: 'window',
		dots: true
  });
	$('.sliderVertical').slick({
		dots: false,
		arrows:false,
		vertical: true,
		verticalSwiping: true,
		autoplay: true,
		pauseOnHover: false
  });



});
