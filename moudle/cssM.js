var fs = require('fs');
var path = require('path');

// 合并css后写入的文件
var allMinCssFile = 'all.css';
// 需要合并的css文件
var fileArr = [
	'selection.css',
	// 'sticky-footer.css',
	'top-bar.css',
	'flex.css',
	'progress.css',
	'path.css',
	'small-part.css',
	'list.css',
	'search-form.css',
	'win.css',
	'panel.css',
	'width-sticky-footer.css',
	'nav.css',
	'nav-slide.css',
	'tabs.css',
	'fixed-bottom-nav.css',
	'pagination.css',
	'color.css',
	'sidebar.css',
	'table.css',
	'reset.css',
	'-webkit-scrollbar.css',
	'dropdown-menu.css',
	'container.css',
	'class.css',
	'form.css',
	// 'responsive.css',
];
// 当前文件夹的所有文件
// var fileArr = fs.readdirSync('.');
// var fileArr = ['D:/wamp/www/qyg/www.artqiyi.com/artqiyi/application/web/views/common/css/common.css'];
// var allMinCssFile = 'D:/wamp/www/qyg/www.artqiyi.com/artqiyi/application/web/views/common/css/common.min.css';

// 先清空
fs.writeFileSync(allMinCssFile, '');
var allMinCss = '';
for (var i = 0; i < fileArr.length; i++) {
	var file = fileArr[i];
	var ext = path.extname(file);

	// 排除
	if (file==allMinCssFile) {
		continue;
	};

	if (ext=='.css') {
		var fileTxt = fs.readFileSync(file).toString();
		var min = cssMin(fileTxt);
		// var min = cssMin(fileTxt,true);
		// console.log('/*'+file+'*/')
		allMinCss += '\n';
		// allMinCss += '/*';
		// allMinCss += file;
		// allMinCss += '*/';
		// allMinCss += '\n';
		allMinCss += min;
	};
};
// 写入文件 all.css
fs.writeFileSync(allMinCssFile, allMinCss);
console.log(allMinCss)



function cssMin(cssTxt, isM){
	isM = isM===undefined? false: true;

	// 去掉 @charset
	cssTxt = cssTxt.replace(/^@charset[\s\S]*?;/ig,'');
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
	// 多行
	if (isM) {
		// }后换行
		cssTxt = cssTxt.replace(/\}/g,'}\n');
		// @media ... { 后换行
		cssTxt = cssTxt.replace(/(@media[\s\S]*?\{)/ig,'$1\n');
	};
	// 单行
	if (!isM) {
		// 逗号
		cssTxt = cssTxt.replace(/\s*([,])\s*/g,'$1');
	};
	// 去掉文件后的空白
	cssTxt = cssTxt.replace(/\s+$/g,'');
	return cssTxt;
}

// test
function test () {
	// var file = '-webkit-scrollbar.css';
	var file = 'nav.css';
	var cssTxt = fs.readFileSync(file).toString();
	var t = cssMin(cssTxt)
	console.log(t);
}
// test()