// 页面加载成功
// setTimeout(function() {
//     siteWelcome.classList.remove('active');
// }, 2000);


// sticky navbar
window.onscroll = function () {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky');
    } else {
        topNavBar.classList.remove('sticky');
    }
};


// subnav
let aTags = document.getElementsByClassName('menuTigger');
for (let i = 0; i < aTags.length; i ++) {
    aTags[i].onmouseenter = function (event) {
        let a = event.currentTarget;            // 找 a 的弟弟
        let brother = a.nextSibling;
        while (brother.nodeType === 3) {
            brother = brother.nextSibling;
        }
        console.log(brother);
    };
    aTags[i].onmouseleave = function (event) {};
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
