/*
对话框
2014年5月16日 17:51:26
*/
/*

<button data-wui-dialog="{
	title: 'dialog',
	content: 'ok',
}">点击弹出对话框</button>

<a data-wui-dialog="{}" href="#id">点击弹出对话框</a>

<a data-wui-dialog="{}" href="url">点击弹出动态内容对话框</a>

*/
$(function() {
	$('[data-wui-dialog]').click(function(e) {
		e.preventDefault();
		//参数
		var data = $(this).data('wui-dialog');
		var options = Function('return '+data)()||{};

		//遮罩层
		var overlay = $('<div>');
		overlay.css({
			position: 'fixed',
			background: '#ddd',
			top: 0,
			left: 0,
			opacity: 0.25,
			width: '100%',
			height: '100%',
			zIndex: 9999
		});
		if (options['overlay']) {
			$('body').append(overlay);
			overlay.hide().fadeIn();
		};

		//对话框
		var dialog = $('<div>');
		dialog.css({
			'position': 'fixed',
			'top': '40%',
			'left': '50%',
			'min-width': '200px',
			'max-width': '600px',
			'max-height': '100%',
			'_width': '400px',
			'overflow': 'auto',
			'z-index': '9999',
			'border-radius': '3px',
			'box-shadow': '#aaa 0px 2px 7px',
			'margin': '0 1em',
			'text-align': 'left',
			'background': '#fff',
		});

		//标题
		console.log(options,options['title'])
		if (options['title']) {
			var dialogHeader = $('<div></div>');
			dialogHeader.css({
				'border-bottom': 'solid 1px #e6e6e6',
				'padding': '.5em 1em',
				'color': '#111'
			});
			dialogHeader.append(options['title']);
			dialog.append(dialogHeader);
		};

		//内容
		if (options['content']) {
			var dialogBody = $('<div></div>');
			dialogBody.css({
				'padding': '.5em 1em'
			});
			dialogBody.append(options['content']);
			dialog.append(dialogBody);
		};

		//图片
		if (options['img']) {
			dialog.append($(this).clone().css({width:'100%', height:'auto', float:'none'}));
		};

		// 自定义内容
		if (options['id']) {
			var el = $('#'+options['id']);
			// 标记一下它原本在哪里
			var flag = $('<i style="display:none"></i>');//标记
			el.after(flag);

			var elDisplay = el.css('display');
			if (elDisplay == 'none') {
				el.show();
			};
			dialog.append(el).removeClass('wui');
		};

		// 关闭
		var dialogClose = $('<div class="wui-close">&times;</div>');
		dialogClose.css({
			'float': 'right',
			'position': 'absolute',
			'top': '0',
			'right': '0',
			'width': '2.5em',
			'height': '2.5em',
			'line-height': '2.5em',
			'text-align': 'center',
			'cursor': 'pointer',
			// 'background-image': 'url(wui.img/wui-icons.png)',
			'background-position': '-197px',
			'background-repeat': 'no-repeat',
		});

		function close() {
			//如果是自定义内容，将它放回原处
			if (options['id']) {
				flag.after(el.css('display',elDisplay)).remove();
			};

			dialog.remove();
			overlay.fadeOut(function() {
				$(this).remove();
			});
		}
		if (options['close'] !== 'undefinded' && options['close'] != 0) {
			dialog.prepend(dialogClose);
			dialogClose.click(function() {
				close();
			});
		}
		$(overlay).on('click', function() {
			close();
		});
		$('body').append(dialog);

		//对话框定位
		// $(window).height(); ie6 无效
		/*
		var top = $(window).height() / 2 - dialog.height() / 2;
		var left = $(document).width() / 2 - dialog.width() / 2;
		dialog.css({
			left: left,
			top: top
		});
		*/

		dialog.css({
			marginLeft: -dialog.outerWidth()/2,
			marginTop: -dialog.outerHeight()/2
		});

		//body不滚动, ie7 下恢复有问题
		// $('body').css({
		// 	overflow: 'hidden'
		// });

	});

});