/*
对话框
2015年9月1日 20:12:19
2015.09.08
*/
/*
wui.dialog({
    overlay: true,                          // 遮罩层
    isOverlayClickClose: true,              // 遮罩层点击关闭
    title: 'wui',                           // 标题
    content: 'dialog',                      // 内容
    icon: 'success' || 'error' || 'info',   // 图标状态
    el: '#id',                              // 对话框元素
    url: 'dialog.html',                     // 动态内容
    ok: function(){alert('ok')},            // 如果是 true or false 表示是否显示按钮，默认 false
    cancel: false,
    show: true,                             // 是否立即显示
})
*/
/*
<style type="text/css">
.overlay {
	position: fixed;
	background: #111;
	top: 0;
	left: 0;
	opacity: 0.25;
	width: 100%;
	height: 100%;
	z-index: 9999;
}

.dialog {
	background: #fff
}

.dialog-header {}

.dialog-body {}

.dialog-footer {}
</style>
*/
+function(wui){
	var setting = {
		overlay: true,                          // 遮罩层
		isOverlayClickClose: true,              // 遮罩层点击关闭
		title: 'wui',                           // 标题
		content: 'dialog',                      // 内容
		icon: null,                             // 图标状态
		el: null,                               // 对话框元素 #id
		url: null,                              // 动态内容 'dialog.html'
		ok: false,                              // 是否显示按钮, function 回调
		cancel: false,                          // 同上
		show: true                              // 是否立即显示
	};

	var $overlay,
		$dialogWp,
		$el,
		$flag,
		elDisplay;

	var Dialog = function(options){
		options = options||{};
		this.options = options;
		var _this = this;

		for(var i in setting){
			options[i]===undefined && (options[i]=setting[i]);
		}

		// 遮罩层
		if (options.overlay) {
			$overlay = $('<div class="overlay" style="position: fixed; background: #111; top: 0; left: 0; opacity: 0.25; width: 100%; height: 100%; z-index: 9999; ">');
			$('body').append($overlay.hide());
		};
		if (options.overlay&&options.isOverlayClickClose) {
			$overlay.click(function(){
				_this.close();
			});
		};

		// dialog-wp
		$dialogWp = $('<div class="dialog-wp">').css({
			position: 'fixed',
			zIndex: 99999999,
			// transition: '.3s',
			maxWidth: '100%',
			maxHeight: '100%',
			overflow: 'auto',
			boxShadow: '0px 1px 10px #888',
		});
		$('body').append($dialogWp.hide());

		// url
		if (options.url) {
			$dialogWp.css({background:'#fff'}).load(options.url, function(){
				_this.resize();
			});
		};

		if (options.show) {
			_this.open();
		};
	};
	Dialog.prototype = {
		open: function () {
			var options = this.options;

			// el
			if (options.el) {
				$el = $(options.el);
				// 标记一下它原本在哪里
				if (!$flag) {
					$flag = $('<i style="display:none"></i>');//标记
					$el.after($flag);
				};

				elDisplay = $el.css('display');
				if (elDisplay == 'none') {
					$el.show();
				};
				$dialogWp.append($el);
			};

			$overlay.fadeIn();
			$dialogWp.show();

			this.resize();
			var that = this;
			$(window).resize(function(){
				that.resize();
			});
			return this;
		},
		resize: function(){
			$dialogWp.css({
				left: ($(window).outerWidth()-$dialogWp.outerWidth())/2,
				top: ($(window).outerHeight()-$dialogWp.outerHeight())/3,
			});

			return this;
		},
		close: function () {
			if ($flag) {
				$flag.before($el.css('display',elDisplay));
			};
			$overlay.fadeOut();
			$dialogWp.hide();

			return this;
		}
	};

	wui.dialog = function(options){
		return new Dialog(options);
	};
}(this.wui||(wui={}));