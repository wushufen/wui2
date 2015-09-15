/*
2015.09.09
*/
+function(wui){
	var $loadingLock = $('<div class="wui-loading-lock">');
	var $loadingWp = $('<div class="wui-loading-wp">');
	var $loading = $('<div class="wui-loading"></div>');

	function loading(options){
		options = options||{};

		options.lock && $('body').append($loadingLock);
		$loadingWp.append($loading);
		$loading.append(options.text);
		$('body').append($loadingWp);

		return loading;
	}

	loading.remove = function(){
		$loadingLock.remove();
		$loading.remove();
	}

	wui.loading = loading;
}(this.wui||(wui={}));