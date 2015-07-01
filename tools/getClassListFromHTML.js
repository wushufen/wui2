
function getClassListFromHTML(str){
	var classMap = {};

	var classReg = /class="(.*?)"/gim;
	var mc;
	while( mc = classReg.exec(str), mc !== null ){
		var aclass = mc[1];

		classMap[aclass] ?
		classMap[aclass] += 1 :
		classMap[aclass] = 1;
	}

	// console.log(classMap);
	// console.log(Object.keys(classMap));
	return Object.keys(classMap).join('\n.');
}


// test
var html =

'<div class="container"> <div class="top"> <div class="user-icon"></div> <div class="download-button">下载TA的个人应用</div> </div> <div class="header"> <div class="heading">heading</div> <div class="subheading">subheading</div> </div> <div class="pane"> <img class="pic" src=""> <div class="pic-desc">这是一些占位用的文本, 这是一些占位用的文本. 这是一些占位用的文本 这是一些占位用的文本.</div> <div class="pic-tag"> <i class="icon i-tag"></i> tag tag </div> <div class="pic-some"> <div class="float-right">热度00 评论00</div> time </div> </div> <div class="pane"> <div>更多作品</div> <div class="more-pic"> <img src=""> <img src=""> <img src=""> </div> </div> <div class="pane"> <ul class="comment"> <li> <span class="comment-nick">nick</span> <span>回复了</span> <span class="comment-nick">nick</span> <p>这是一些占位用的文本, 这是一些占位用的文本 这是一些占位用的文本.</p> </li> <li> <span class="comment-nick">nick</span> <span>回复了</span> <span class="comment-nick">nick</span> <p>这是一些占位用的文本, 这是一些占位用的文本 这是一些占位用的文本.</p> </li> <li> <span class="comment-nick">nick</span> <span>回复了</span> <span class="comment-nick">nick</span> <p>这是一些占位用的文本, 这是一些占位用的文本 这是一些占位用的文本.</p> </li> </ul> <div class="more-comment-btn">查看更多评论</div> </div> <div class="pane"> <div class="user-icon"></div> <div class="user-nick">user-nick</div> <div class="user-desc">这是一些占位用的文本, 这是一些占位用的文本 这是一些占位用的文本 这是一些占位用的文本</div> </div> </div> '

var classList = getClassListFromHTML(html);
console.log(classList)