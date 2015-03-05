var btnShowHide = $('.btn-show-hide');
var btnMove = $('.btn-move');
var btnCollapseExpand = $('.btn-collapse-expand');

$.btnShowHide.on('click', function () {
  $box.toggleClass('js-box-show')
});

$.btnMove.on('click', function () {
  $diamond.toggleClass('js-diamond-move')
});

$.btnCollapseExpand('click', function () {
  $panel.toggleClass('js-panel-collapse')
});

$btnBounce.on('click', function () {
  $circle.addClass('js-ball-bounce')
});

$circle.on('webkitAnimationEnd animationend', function () {
  $circle.removeClass('js-ball-bounce')
});