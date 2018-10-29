
!function () {
    var model = {
        init() {
            var APP_ID = 'Od1rxG0lrchLp9pRPPyyELe2-gzGzoHsz'
            var APP_KEY = 'jCXVMsw3GsgJsnhbO4sDOwnS'
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch() {
            var query = new AV.Query('X');
            return query.find() // Promise 对象
        },
        save: function (name) {
            var Message = AV.Object.extend('X');
            var message = new Message();
            return message.save({  // Promise 对象
                'name': name
            })
        }
    }
    // sticky navbar
    var view = View('#topNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            var view = this.view
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)

}.call()
