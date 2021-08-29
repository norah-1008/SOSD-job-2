window.addEventListener('load', function () {
    // 动态生成小圆圈 有几张图片，就生成几个小圆圈
    var box52 = document.querySelector(".box52");
    var ul = box52.querySelector('ul');
    // console.log(ul.children.length);
    var ol = box52.querySelector('.nav');
    var box52Width = box52.offsetWidth;
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li
        var li = document.createElement('li');
        li.setAttribute('index', i);
        // 把小li插入到ol里面
        ol.appendChild(li);
        // 小圆圈 排他思想 可以直接在生成小圆圈的同时直接绑定点击事件
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            // 点击小圆圈 移动图片 移动的是ul

            animate(ul, -index * box52Width);
        })
    }
    // 克隆第一张图片 放到最后
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 把ol里面的第一个小li设置类名为 current
    ol.children[0].className = 'current';
    var num = 0;
    // flag节流阀
    var flag = true;
    // circle控制小圆圈播放
    var circle = 0;
    var next = box52.querySelector('.next');
    // 右侧按钮
    next.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * box52Width, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });
    // 左侧按钮
    var prev = box52.querySelector('.prev');
    prev.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * box52Width + 'px';
        }
        num--;
        animate(ul, -num * box52Width);
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChange();
    });

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }

    var timer = setInterval(function () {
        next.click();
    }, 2500);
})