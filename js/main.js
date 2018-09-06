// 页面加载成功
siteWelcome.classList.remove('active');

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
