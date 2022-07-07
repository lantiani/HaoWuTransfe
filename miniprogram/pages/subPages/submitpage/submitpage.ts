// pages/subPages/submitpage/submitpage.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        timeNum: <any>5,
        codeText: ``,
        timer:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },
    //  fn(this:any) {
    // let timer:any;
    // this.setData({
    //     timeNum:timer = setInterval(() => {
    //         this.data.timeNum--
    //         this.setData({
    //             timeNum: this.data.timeNum
    //         })
    //         if(this.data.timeNum == 0) {
    //             clearInterval(timer)
    //             this.setData({
    //                 text:"完成啦",
    //                 timeNum:""
    //             })
    //         }
    //         console.log(this.data.timeNum);
    //     }, 1000)
    // })

    // showDialog: function () {
    //     let that = this;
    //     let timeNum = that.data.timeNum;
    //     that.setData({
    //         hideFlag: false,
    //         codeText: '请阅读至少' + timeNum + 's',
    //         // 定时5秒后解开
    //         timer: setInterval(function () {
    //             timeNum--;
    //             that.setData({
    //                 codeText: '请阅读至少' + timeNum + 's',
    //             })

    //             if (timeNum == 0) {
    //                 clearInterval(that.data.timer);
    //                 that.setData({
    //                     disabled: false,
    //                     codeText: '同意本条款',
    //                     disabledBtn: false
    //                 });
    //             }
    //             return;
    //         }, 1000),
    //     })
    // },
    // 显示遮罩层

    // },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})