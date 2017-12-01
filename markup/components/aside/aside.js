
$(document).ready(function () {
	$('.aside__title').on('click', function () {
		$(this).parent('.aside__item').toggleClass('is-active');
	});
});