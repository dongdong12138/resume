// 页面加载成功
setTimeout(function() {
    siteWelcome.classList.remove('active');
}, 2000);


// sticky navbar
window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky');
    } else {
        topNavBar.classList.remove('sticky');
    }
};


// subnav
let liTags = document.querySelectorAll('nav.menu > ul > li');
for (let i = 0; i < liTags.length; i ++) {
    liTags[i].onmouseenter = function (event) {
        event.currentTarget.classList.add('active');
    };
    liTags[i].onmouseleave = function (event) {
        event.currentTarget.classList.remove('active'); 
    };
}


// auto scroll smoothly
let aTags = document.querySelectorAll('nav.menu > ul > li > a');
for (let i = 0; i < aTags.length; i ++) {
    aTags[i].onclick = function (event) {
        event.preventDefault();                 // 阻止默认动作
        let a = event.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href);
        let rect = element.getBoundingClientRect();
        let top = element.offsetTop;
        window.scrollTo(0, top-80);
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
