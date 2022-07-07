import { wxApi } from "../../../utils/tool"

// pages/subPages/zyaddress/zyaddress.ts
Page({
    /**
     * 页面的初始数据
     */
    data: {
        cueColor: "#7ccd7d",
        status: true
    },

    zyAddress() {
        console.log('zyAddress');
    },
    skipAddress() {
        wx.navigateTo({
            url: "/pages/subPages/zyaddress/zyaddress"
        })
    },
    reviseStatus(e:any) {
        console.log(e,"'''");
        
        this.setData({
            status:e.detail
        })
    }
})