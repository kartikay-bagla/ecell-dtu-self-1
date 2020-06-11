// number count for stats, using jQuery animate

$('.count').counterUp({
    delay: 10,
    time: 1000
});

//   ----------- day schedule tabs
$('.slideday a').click(function () {
	$('.slideday.active').removeClass('active');
	$(this).closest('.slideday').addClass('active');
	return false;
  });


  // ==========swiper==
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop:true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });