// $(function(){
// 	var $toggleDropdown = $('[data-wui-dropdown]');
// 	$toggleDropdown.click(function(e){
// 		e.stopPropagation();
// 		$(this).closest('.dropdown').toggleClass('open');
// 		$toggleDropdown.not($(this)).closest('.dropdown').removeClass('open');
// 	});
// 	var $doc = $(document);
// 	var $dropdown = $('.dropdown');
// 	$doc.click(function(){
// 		$dropdown.removeClass('open');
// 	});
// });

/*
data-wui-dropdown="{
	hoverShow: false,
	closeOther: true,
	bodyClickClose: true
}"
*/
$(function(){
	var $dropdown = $('.dropdown');
	var $toggleDropdown = $('[data-wui-dropdown]');
	$toggleDropdown.each(function(i,el){
		var $this = $(el);
		var options = Function('return '+$this.data('wui-dropdown'))()||{};
		options['closeOther'] = options['closeOther']==undefined? true: options['closeOther']; 
		options['bodyClickClose'] = options['bodyClickClose']==undefined? true: options['bodyClickClose']; 

		if (options['hoverShow']) {
			$this.mouseenter(function(){
				$(this).closest('.dropdown').addClass('open');
				if (options['closeOther']) {
					$toggleDropdown.not($this).closest('.dropdown').removeClass('open');
				};
			});
		}else{
		};
			$this.click(function(e){
				e.stopPropagation();
				$(this).closest('.dropdown').toggleClass('open');
				if (options['closeOther']) {
					$toggleDropdown.not($this).closest('.dropdown').removeClass('open');
				};
			});

		if (options['bodyClickClose']) {
			var $doc = $(document);
			$doc.click(function(e){
				// var $target = $(e.target);
				$this.closest('.dropdown').removeClass('open');
			});
		};
	});

});
