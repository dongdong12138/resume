
!function () {
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
}.call()
