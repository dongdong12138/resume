// 页面加载成功
setTimeout(function() {
    siteWelcome.classList.remove('active');
}, 2000);

// 添加 offset 类
let specialTags = document.querySelectorAll('[data-x]');
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset');
}

// sticky navbar
setTimeout(function () {
    findClosest();
}, 2200);
window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky');
    } else {
        topNavBar.classList.remove('sticky');
    }
    findClosest();
};
function findClosest () {
    let specialTags = document.querySelectorAll('[data-x]');
    let minIndex = 0;
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i;
        }
    }

    // minIndex 就是离窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset');
    let id = specialTags[minIndex].id;
    let a = document.querySelector('a[href="#' + id + '"]');
    let li = a.parentNode;
    let brothersAndMe = li.parentNode.children;
    for (let i = 0; i < brothersAndMe.length; i++) {
        brothersAndMe[i].classList.remove('highlight');
    }
    li.classList.add('highlight');
}


// subnav
let liTags = document.querySelectorAll('nav.menu > ul > li');
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (event) {
        event.currentTarget.classList.add('active');
    };
    liTags[i].onmouseleave = function (event) {
        event.currentTarget.classList.remove('active');
    };
}


// auto scroll smoothly
let aTags = document.querySelectorAll('nav.menu > ul > li > a');
// Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (event) {
        event.preventDefault();                 // 阻止默认动作
        let a = event.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href);
        let rect = element.getBoundingClientRect();
        let top = element.offsetTop;

        let currentTop = window.scrollY;
        let targetTop = top - 80;
        let s = targetTop - currentTop;
        var coords = { y: currentTop };
        var t = Math.abs((s / 100) * 300);
        if (t > 500) { t = 500 }
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                window.scrollTo(0, coords.y);
            })
            .start();
    };
}


// 作品集滚动条滚动
var sampleAll = document.getElementById('sampleAll');
var sampleFrame = document.getElementById('sampleFrame');
var sampleProto = document.getElementById('sampleProto');
var sampleReelsBar = document.getElementsByClassName('sampleReelsBar')[0];

sampleAll.onclick = function () {
    sampleReelsBar.className = 'sampleReelsBar state-1';
};
sampleFrame.onclick = function () {
    sampleReelsBar.className = 'sampleReelsBar state-2';
};
sampleProto.onclick = function () {
    sampleReelsBar.className = 'sampleReelsBar state-3';
};
