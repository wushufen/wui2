 /**
提示信息
by wushufen
2014.09.17
need jquery
msg 文本信息
time 消失时间
*/
+function(window, wui){
    function toast(msg, time) {
        msg = msg || 'toast';
        time = time || 1000;

        // 容器
        var toastsBox = document.getElementById('toastsBox');
        if (!toastsBox) {
            toastsBox = document.createElement('div');
            toastsBox.setAttribute('id', 'toastsBox');
            toastsBox.setAttribute('style', '' 
            + 'position: fixed;' 
            + 'bottom: 40%;' 
            + 'left: 1em;' 
            + 'right: 1em;' 
            + 'text-align: center;' 
            + 'height: 0;'
            + 'z-index: 99999;'
            );
            
            document.body.appendChild(toastsBox);
        }

        // toast
        var toastEl = document.createElement('div');
        toastEl.setAttribute('style', '' 
        + 'display: inline-block; *display:inline;*zoom:1;' 
        + 'padding: .25em 1em;' 
        + 'border: solid 1px #eee;' 
        + 'border-radius: 4px;' 
        + 'background: #333;' 
        + 'background: rgba(0,0,0,.7);' 
        + 'color: #fff;' 
        + 'box-shadow: 0px 1px 10px #333;' 
        + 'margin: .125em 0em;' 
        + 'position: relative;' 
        + 'top: 0;'
        );

        // text
        var text = document.createTextNode(msg);
        toastEl.appendChild(text);

        // br
        var br = document.createElement('br');
        
        toastsBox.appendChild(toastEl);
        toastsBox.appendChild(br);
        
        setTimeout(function() {
            toastEl.style.webkitTransition = '1s';
            toastEl.style.mozTransition = '1s';
            toastEl.style.transition = '1s';
            toastEl.style.top = '-1em';
            setTimeout(function() {
                toastEl.style.opacity = 0;
                setTimeout(function() {
                    toastEl.parentNode.removeChild(toastEl);
                    br.parentNode.removeChild(br);
                }, 1000);
            }, 1000);
        }, time)
        
        return toastEl;
    }
    
    wui.toast = toast;
    window.wui = wui;
}(this, this.wui||{});
