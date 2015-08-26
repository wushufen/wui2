/*
require jquery

var waterfall = $el.waterfall();
waterfall.put(item);

*/
(function(window, wui){
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

		// 定位并加入流
		function add (){
			//如果开始隐藏的则显示
			$item.show();

			// 加入完第一个时计算宽度、列数
			if (isFirst) {
				$container.append($item);
				colW = $item.width();
				colNum = parseInt($container.width()/colW + 0.2);
				// console.log(colW, colNum)
				colHeightArr.length = colNum;
				fillArr(colHeightArr,0);

				isFirst = false;
			}

			// 最短的那列下标
			var minColIndex = getMinIndex(colHeightArr);
			// 定位
			var x = minColIndex/colNum *100 +'%';
			var y = colHeightArr[minColIndex];
			$item.css({
				position: 'absolute',
				left: x,
				top: y
			});
			// 加入文档。之后才能准确计算其高度
			// 已加入流的不重新添加
			isNew && $container.append($item);
			// 更新列高
			colHeightArr[minColIndex] += $item.height();
			// 更新容器高度
			$container.height(Math.max.apply(null, colHeightArr));
		};

		// add();return;
		// 找出其中的（第一个）图片的地址
		var $img = $item.find('img');
		// 未添加并且有图片的才注册事件
		if (isNew && $img.length) {//$img 是个对象，即使空也为真
			// 图片加载完，高度才能确定，再把单项加入文档
			$img[0].onload = add;
		}else{
			// 没有图片的直接加
			add();
		};
	};

	// 重置
	var reset = function(){
		var $items = $container.children();

		// 重置参数
		colW = $items.width();//列宽/*动画进行中会影响宽度的获取*/
		colNum = parseInt($container.width()/colW + 0.2);//列数。不能直接取整，有时会出现4.999...的值，应为5列
		// console.log($container.width()/colW, $container.width()/colW + 0.2, colNum)
		// console.log('不是吧')
		colHeightArr.length = colNum;
		fillArr(colHeightArr,0);

		for(var i=0; i<$items.length; i++){
			//put false只重新计算位置，不重新添加
			put($items[i], false);
		}
	};

	var resizeTimer;
	$(window).resize(function(){
		// console.log('resize?')
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(reset,1001);
	});

	// 初始化
	var init = function(ctn){
		// 重置参数
		$container = ctn;

		// 当加完第一个才能计算宽度、列数
		colW = null;//列宽
		colNum = 1;//列数
		colHeightArr = [];//各列高

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

		// 初始化
		init($(this));
		// reset();
		// setInterval(reset,250);
		// setInterval("waterfall.put('<div>abc</div>')",210)

		// 返回
		return {
			reset: reset,
			put: put
		};
	};

	wui.waterfall = function(el){
		init($(el));
		return {
			reset: reset,
			put: put
		};
	};
	window.wui = wui;
})(this, this.wui||{});