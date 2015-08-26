var fs = require('fs');
var path = require('path');

// 需要合并的css文件
var fileFromArr = [
	'reset.css',

	'container.css',
	'dropdown-menu.css',
	'fixed-bottom-nav.css',
	'flex.css',
	'form.css',
	'list.css',
	'nav-slide.css',
	'nav.css',
	'pagination.css',
	'panel.css',
	'path.css',
	'progress.css',
	'search-form.css',
	'selection.css',
	'sidebar.css',
	'small-part.css',
	'table.css',
	'tabs.css',
	'top-bar.css',
	'width-sticky-footer.css',
	'win.css',
	'responsive.css',
	'sticky-footer.css',

	'class.css',
	'color.css',
	
	// '-webkit-scrollbar.css',
	'-webkit-scrollbar2.css',
];
// var fileFromArr = fs.readdirSync('.'); // 当前文件夹的所有文件

// 合并css后写入的文件
var fileToArr = [
	'wui.css',
	'D:/wamp/www/artqiyi-wsf/views/admin/order/css/all.css',
]


// 合并
cssM({
	from: fileFromArr,
	to: fileToArr,
	isMultiLine: true
});


function cssM (options) {
	var options = options||{};
	var fileToArr = options.to||'all.css';
	var fileFromArr = options.from||[];
	var isMultiLine = options.isMultiLine;

	// 遍历文件
	var allMinCss = '';
	for (var i = 0; i < fileFromArr.length; i++) {
		var file = fileFromArr[i];
		var ext = path.extname(file);
		// 排除
		var isToFile = false;
		for (var j = 0; j < fileToArr.length; j++) {
			if (file==fileToArr[j]) {
				isToFile = true;
			};
		};
		if (isToFile) {continue};
		if (ext=='.css') {
			var fileTxt = fs.readFileSync(file).toString();
			// 压缩
			var min = _cssMin(fileTxt,isMultiLine);
			console.log('/*'+file+'*/');
			allMinCss += '\n';
			allMinCss += '/*';
			allMinCss += file;
			allMinCss += '*/';
			allMinCss += '\n';
			allMinCss += min;
		};
	};
	// 写入文件
	for (var i = 0; i < fileToArr.length; i++) {
		// 先清空
		fs.writeFileSync(fileToArr[i], '');
		fs.writeFileSync(fileToArr[i], allMinCss);
	};
	console.log(allMinCss);

	// 压缩css
	function _cssMin(cssTxt, isMultiLine){
		isMultiLine = isMultiLine===undefined? false: isMultiLine;

		// 去掉 @charset
		cssTxt = cssTxt.replace(/^@charset[\s\S]*?[;\n]/ig,'');
		// 去掉注释
		cssTxt = cssTxt.replace(/\/\*[\s\S]*?\*\//g,'');
		// 去掉文件前的空白
		cssTxt = cssTxt.replace(/^\s+/g,'');
		// 合并多余空白
		cssTxt = cssTxt.replace(/(\s)+/g,'$1');
		// 去掉符号前后的空白
		cssTxt = cssTxt.replace(/\s*([\{:;\}\+])\s*/g,'$1');
		// 去掉最后的;
		cssTxt = cssTxt.replace(/;(})/g,'$1');
		// 0px
		cssTxt = cssTxt.replace(/\s0px/g,' 0');
		cssTxt = cssTxt.replace(/\s0em/g,' 0');
		cssTxt = cssTxt.replace(/\s0rem/g,' 0');
		// 多行
		if (isMultiLine) {
			// }后换行
			cssTxt = cssTxt.replace(/\}/g,'}\n');
			// @media ... { 后换行
			cssTxt = cssTxt.replace(/(@media[\s\S]*?\{)/ig,'$1\n');
		};
		// 单行
		if (!isMultiLine) {
			// 逗号
			cssTxt = cssTxt.replace(/\s*([,])\s*/g,'$1');
		};
		// 去掉文件后的空白
		cssTxt = cssTxt.replace(/\s+$/g,'');
		return cssTxt;
	}

}