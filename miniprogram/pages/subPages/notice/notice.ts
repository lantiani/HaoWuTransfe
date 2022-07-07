// pages/subPages/notice/notice.ts
Page({
    data: {
        isDeb: true,
        time: 5,
        text: "请先阅读(5)",
        timer: 0,
        flag: true
    },
    confirm() {
        let path = this.getPagePath();
        if (path !== "pages/content/my/my") {
            wx.navigateTo({
                url: "/pages/subPages/flowpath/flowpath"
            })
        } else {
            wx.navigateBack()
        }
    },
    onReachBottom() {
        if (!this.data.flag) {
            return
        }
        this.fn();
    },
    onLoad() {
        let path = this.getPagePath();
        if (path !== "pages/content/my/my") {
            this.setData({
                flag: true
            })
        } else {
            this.setData({
                flag: false,
                isDeb: false,
                text: "已知悉"
            })
        }

    },
    getPagePath() {
        let pages = getCurrentPages();
        let prevpage = pages[pages.length - 2];
        return prevpage.route
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
    }
})