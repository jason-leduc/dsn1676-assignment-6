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

$('.btn-collapse-expand').on('click', function (e) {
	e.preventDefault();
	// console.log('clicked-collapse-expand')
	$panel.animate({height: 'toggle'});
});

$('.btn-bounce').on('click', function (e) {
	e.preventDefault();
	// console.log('clicked-bounce')
	$circle.addClass('js-bounce');
});

$circle.on('webkitAnimationEnd animationend', function() {
	// console.log('animation-end');
	$circle.removeClass('js-bounce');
});

$('.btn-append').on('click', function (e) {
	e.preventDefault();
	// console.log('clicked-append')
	var $li = $('<li>').html('New List Item');
	$list.prepend($li);
});