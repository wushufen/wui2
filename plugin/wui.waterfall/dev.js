// 一个非常奇怪的问题， resize 第二次，第一个会跑到最后



(function(){
	var $container,//容器
		colW,//列宽
		colNum,//列数
		colHeightArr;//各列高

	// 获得数组最小值的下标
	function getMinIndex (arr) {
		var minHeight = Math.min.apply(null, arr);
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == minHeight) {
				return i;
			};
		};
	}
	// 获得数组最大值的下标
	function getMaxIndex (arr) {
		var maxHeight = Math.max.apply(null, arr);
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == maxHeight) {
				return i;
			};
		};
	}
	// 重置数组
	function fillArr(arr, x){
		for (var i = 0; i < arr.length; i++) {
			arr[i] = x;
		};
	}


	// 加入一个单项
	var isFirst = true;
	var put = function(itemEl, isNew){
		var $item = $(itemEl);
		var isNew = isNew===undefined? true: false;

		// 找出其中的（第一个）图片的地址
		var $img = $item.find('img');
		// 未添加并且有图片的才注册事件
		if (false && isNew && $img.length) {//$img 是个对象，即使空也为真
			// 图片加载完，高度才能确定，再把单项加入文档
			$img[0].onload = loaded;

			console.log('\n *** onload...')
		}else{
			// 没有图片的直接加
			loaded();
			console.log('\n *** no onload')
		};

		// 定位并加入流
		function loaded (){

			// 加入完第一个时计算宽度、列数
			console.log('------------------ isFirst', isFirst, $item[0]);
			if (isFirst) {
				$container.append($item);
				//列宽。动画进行中会影响宽度的获取，所以 resize 延时1秒后再执行
				colW = $item.width();
				//列数。不能直接取整，有时会出现4.999...的值，应为5列
				colNum = parseInt($container.width()/colW + 0.2);
				// 列高。初始为0
				colHeightArr = new Array(colNum);
				fillArr(colHeightArr,0);
			}

			// 最短的那列下标
			var minColIndex = getMinIndex(colHeightArr);
			// 定位
			var x = minColIndex/colNum * 100 +'%';
			var y = colHeightArr[minColIndex];
			$item.css({
				position: 'absolute',
				left: x,
				top: y
			});
			// 加入文档。之后才能准确计算其高度
			// 已加入流的不重新添加
			if (!isFirst && isNew) {
				$container.append($item);
				console.log('ap')
			};
			// 更新列高
			colHeightArr[minColIndex] += $item.height();
			// 更新容器高度
			$container.height(Math.max.apply(null, colHeightArr));

			// 第一个完成
			isFirst = false;
		};

	};

	// 重置
	var reset = function(){
		console.log('reset ==========================')
		var $items = $container.children();

		// 重置参数
		isFirst = true;

		for(var i=0; i<$items.length; i++){
			//put false只重新计算位置，不重新添加
			put($items[i], false);
		}
	};

	var resizeTimer;
	$(window).resize(function(){
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(reset,1001);
	});

	// 初始化
	var init = function(){

		// 当加完第一个才能计算宽度、列数
		// colW = null;//列宽
		// colNum = 1;//列数
		// colHeightArr = [];//各列高

		// 初始的内容
		var $items = $container.children().clone();
		//*******初始清空，关键******
		$container.empty();
		// 再放入
		for(var i=0; i<$items.length; i++){
			put($items[i]);
		}
	};

	// 插件接口
	$.fn.waterfall = function(){

		$container = $(this);
		// 初始化
		init();

		// reset();
		// setInterval(reset,250);
		// setInterval("waterfall.put('<div>abc</div>')",210)

		// 返回
		return {
			reset: reset,
			put: put
		};
	};
})();