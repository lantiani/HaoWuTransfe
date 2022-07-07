// pages/subPages/cheapdeatil/cheapdetail.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    obtainData(e:any) {
        console.log(e.detail);
        wx.navigateBack();
        // 领取成功后将按钮修改为已领取
        wx.showToast({
            title:"领取成功"
        })
    },
    onLoad() {

    },
    onShow() {

    },
})