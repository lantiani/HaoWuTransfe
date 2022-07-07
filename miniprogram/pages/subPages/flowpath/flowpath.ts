
Page({
    data: {
        isDeb: true,
        time: 5,
        text: "请先阅读(5)",
        timer: 0,
    },
    confirm() {
        let path = this.getPagePath();
        if(path !== "pages/content/my/my") {
            // wx.navigateTo()
            console.log('暂未定');
        } else {
            wx.navigateBack()
        }
    },
    onLoad() {
        let path = this.getPagePath()
        if(path !== "pages/content/my/my") {
            this.fn()
        } else {
            this.setData({
                text:"已知悉",
                isDeb:false
            })
        }
    },
    fn() {
        let _this = this.data;
        this.setData({
            timer: setInterval(() => {
                _this.time--;
                this.setData({
                    text: `请先阅读(${_this.time})`,
                    time: _this.time,
                })
                if (_this.time <= 0) {
                    clearInterval(_this.timer)
                    this.setData({
                        text: "已阅读",
                        isDeb: false,
                        flag: false
                    })
                }
            }, 1000)
        })
    },
    getPagePath() {
        let pages = getCurrentPages();
        let prevpage = pages[pages.length - 2];
        return prevpage.route
    }
})