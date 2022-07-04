import { wxApi } from "../../../utils/tool"

// pages/subPages/zyaddress/zyaddress.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: [
            {
                id: 1, title: "Name", value: "Please fill in the recipient‘s name"
            },
            {
                id: 2, title: "Phone", value: "Please fill in the recipient‘s phone"
            },
            {
                id: 3, title: "Address", value: "Please fill in the address"
            },
            {
                id: 4, title: "City", value: "Please fill in the city"
            },
            {
                id: 5, title: "PostCode", value: "Please fill in the postcode"
            },
        ]
    },
    async copy(e:any) {
        await wxApi(wx.setClipboardData, { data:e.target.dataset.phone })
        await wxApi(wx.showToast, {
            title: '复制成功',
            icon: 'none',
            duration: 2000
        })
    },
    zyAddress() {
        console.log('zyAddress');
    },
    skipAddress() {
        wx.navigateTo({
            url:"/pages/subPages/zyaddress/zyaddress"
        })
    }
})