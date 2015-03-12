var $box = $('.box');
var $diamond = $('.diamond');
var $panel = $('.panel');
var $circle = $('.circle');
var $list = $('.list');

$('.btn-show-hide').on('click', function (e) {
	e.preventDefault();
	// console.log('clicked-show-hide')
	$box.toggleClass('js-show-hide');
});

$('.btn-move').on('click', function (e) {
	e.preventDefault();
	// console.log('clicked-move')
	$diamond.toggleClass('js-move');
});

